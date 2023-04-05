import { performMonolithGraphQLQuery } from './commerce.js';

const STOREFRONT_QUERY_RESULT_KEY = 'storefront-query-result';

const STOREFRONT_CONTEXT_QUERY = `
   query DataServicesStorefrontInstanceContext {
        dataServicesStorefrontInstanceContext {
            catalog_extension_version
            environment
            environment_id
            store_code
            store_id
            store_name
            store_url
            store_view_code
            store_view_id
            store_view_name
            website_code
            website_id
            website_name
        }
        storeConfig {
            base_currency_code
            store_code
        }
    }
`;

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.addEventListener('load', () => {
      resolve();
    });
    script.addEventListener('error', () => {
      reject(new Error(`Failed to load script ${url}`));
    });
    document.head.appendChild(script);
  });
}

let eventsSDKInitialized = false;

export async function initializeMSEWithStorefrontInstance() {
  if (!eventsSDKInitialized) {
    let result;
    if (window.localStorage.getItem(STOREFRONT_QUERY_RESULT_KEY)) {
      result = JSON.parse(window.localStorage.getItem(STOREFRONT_QUERY_RESULT_KEY));
    } else {
      ({ data: result } = await performMonolithGraphQLQuery(STOREFRONT_CONTEXT_QUERY, {}));
      window.localStorage.setItem(STOREFRONT_QUERY_RESULT_KEY, JSON.stringify(result));
    }

    if (!result) {
      throw new Error('error fetching storefront context');
    }

    try {
      if (!eventsSDKInitialized) {
        await Promise.all([
          // sdk - publishes to acdl
          // TODO remove this script, load acdl instead, and publish to acdl directly
          loadScript('https://unpkg.com/@adobe/magento-storefront-events-sdk/dist/index.js'),
          // collector - acdl sub, forwards to edges
          loadScript('https://unpkg.com/@adobe/magento-storefront-event-collector/dist/index.js'),
        ]);
        eventsSDKInitialized = true;

        const {
          environment,
          environment_id: environmentId,
          website_id: websiteId,
          website_code: websiteCode,
          website_name: websiteName,
          store_url: storeUrl,
          store_id: storeId,
          store_code: storeCode,
          store_name: storeName,
          store_view_id: storeViewId,
          store_view_code: storeViewCode,
          store_view_name: storeViewName,
          catalog_extension_version: catalogExtensionVersion,
        } = result.dataServicesStorefrontInstanceContext;
        const { base_currency_code: baseCurrencyCode } = result.storeConfig;

        // required for all data collection
        const strorefrontInstanceContext = {
          environmentId,
          environment,
          storeUrl,
          websiteId,
          websiteCode,
          storeId,
          storeCode,
          storeViewId,
          storeViewCode,
          websiteName,
          storeName,
          storeViewName,
          baseCurrencyCode,
          storeViewCurrencyCode: baseCurrencyCode,
          catalogExtensionVersion,
        };

        // required for AEP/Adobe Analytics
        // TODO: get these values from beacon extension graphql api
        const aepContext = {
          imsOrgId: '53A16ACB5CC1D3760A495C99@AdobeOrg',
          datastreamId: '4d8ccd3b-9463-43bf-862a-c908fad3b20b',
        };
        const eventForwardingContext = {
          aep: true,
          snowplow: true,
        };

        if (window.magentoStorefrontEvents) {
          window.magentoStorefrontEvents.context.setStorefrontInstance(strorefrontInstanceContext);
          window.magentoStorefrontEvents.context.setAEP(aepContext);
          window.magentoStorefrontEvents.context.setEventForwarding(eventForwardingContext);
          window.magentoStorefrontEvents.publish.pageView();
        }
      }
    } catch (error) {
      console.error(`failed to initialize mse: ${error}`);
    }
  }
}

export function setPage(pageType) {
  if (window.magentoStorefrontEvents) {
    window.magentoStorefrontEvents.context.setPage({
      pageType,
      maxXOffset: window.innerWidth,
      maxYOffset: window.innerHeight,
      minXOffset: 0,
      minYOffset: 0,
      ping_interval: 0,
      pings: 0,
    });
  }
}
