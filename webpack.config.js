const { configureWebpack, graphQL } = require('@magento/pwa-buildpack');
const webpack = require('webpack');
const fs = require('fs');

const componentOverrideMapping = {
 '@magento/peregrine/lib/talons/CartPage/ProductListing/productListingFragments.gql.js': './src/talons/CartPage/ProductListing/productListingFragments.gql.js',
 '@magento/venia-ui/lib/components/Portal/portal.js': './src/components/Portal/portal.js',
 '@magento/peregrine/lib/talons/SignInPage/useSignInPage.js': './src/talons/SignInPage/useSignInPage.js',
 '@magento/peregrine/lib/talons/CheckoutPage/useCheckoutPage.js': './src/talons/CheckoutPage/useCheckoutPage.js',
 '@magento/peregrine/lib/talons/CreateAccount/useCreateAccount.js': './src/talons/CreateAccount/useCreateAccount.js',
};

const {
    getMediaURL,
    getAvailableStoresConfigData,
} = graphQL;

const { DefinePlugin } = webpack;

module.exports = async env => {
    /**
     * configureWebpack() returns a regular Webpack configuration object.
     * You can customize the build by mutating the object here, as in
     * this example. Since it's a regular Webpack configuration, the object
     * supports the `module.noParse` option in Webpack, documented here:
     * https://webpack.js.org/configuration/module/#modulenoparse
     */
    const config = await configureWebpack({
        context: __dirname,
        alias: componentOverrideMapping,
        vendor: [
            '@apollo/client',
            'apollo-cache-persist',
            'informed',
            'react',
            'react-dom',
            'react-feather',
            'react-redux',
            'react-router-dom',
            'redux',
            'redux-actions',
            'redux-thunk'
        ],
        special: {
            'react-feather': {
                esModules: true
            }
        },
        env
    });

    const mediaUrl = await getMediaURL();
    const storeConfigData = {
        "store_code": "maidenform_store_view",
        "code": "maidenform_store_view",
        "locale": "en_US",
        "secure_base_media_url": "https://franklin.maidenform.com/",
        "store_name": "Maidenform Store View"
    };
    const { availableStores } = await getAvailableStoresConfigData();

    /**
     * Loop the available stores when there is provided STORE_VIEW_CODE
     * in the .env file, because should set the store name from the
     * given store code instead of the default one.
     */
    const availableStore = availableStores.find(
        ({ store_code }) => store_code === process.env.STORE_VIEW_CODE
    );

    global.MAGENTO_MEDIA_BACKEND_URL = mediaUrl;
    global.LOCALE = storeConfigData.locale.replace('_', '-');
    global.AVAILABLE_STORE_VIEWS = availableStores;

    const possibleTypes = JSON.parse(fs.readFileSync('possibleTypes.json', 'utf8'));

    config.module.noParse = [
        /@adobe\/adobe\-client\-data\-layer/,
        /braintree\-web\-drop\-in/
    ];

    // Remove unnecessary plugins
    const pluginsToRemove = new Set([
        'HTMLWebpackPlugin',
        'ServiceWorkerPlugin',
        'RootComponentsPlugin',
        'UpwardIncludePlugin'
    ]);

    config.plugins = [
        ...config.plugins.filter(
            plugin => !pluginsToRemove.has(plugin.constructor.name)
        ),
        new DefinePlugin({
            /**
             * Make sure to add the same constants to
             * the globals object in jest.config.js.
             */
            POSSIBLE_TYPES: JSON.stringify(possibleTypes),
            STORE_NAME: availableStore
                ? JSON.stringify(availableStore.store_name)
                : JSON.stringify(storeConfigData.store_name),
            STORE_VIEW_CODE: process.env.STORE_VIEW_CODE
                ? JSON.stringify(process.env.STORE_VIEW_CODE)
                : JSON.stringify(storeConfigData.code),
            AVAILABLE_STORE_VIEWS: JSON.stringify(availableStores),
            DEFAULT_LOCALE: JSON.stringify(global.LOCALE),
            DEFAULT_COUNTRY_CODE: JSON.stringify(
                process.env.DEFAULT_COUNTRY_CODE || 'US'
            ),
            __DEV__: process.env.NODE_ENV !== 'production'
        })
    ];

    // Add additional entrypoints
    config.entry.cart = './src/RootComponents/Cart/index.js';
    config.entry.checkout = './src/RootComponents/Checkout/index.js';
    config.entry.account = './src/RootComponents/Account/index.js';
    config.entry.login = './src/RootComponents/Login/index.js';
    config.entry.signup = './src/RootComponents/CreateAccount/index.js';

    // Change output filenames
    config.output.filename = '[name].js';
    config.output.chunkFilename = '[name].js';

    // Prevent removal of console statements
    if (env.mode === 'production') {
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = false;
    }

    // Fix publicPath
    config.output.publicPath = '/scripts/pwa-dist/';

    return [config];
};
