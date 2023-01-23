const mfeRootPath = 'https://d1f3flsjknp2wb.cloudfront.net/develop/storefront-sdk';

export const storeView = 'maidenform_store_view';

export const commerceEnv = {
  endpoint: 'https://www.marbec.click/graphql-maidenform',
};

export const importFromStorefrontSDK = (path) => import(mfeRootPath + path);

const { renderer } = await importFromStorefrontSDK('/cart/renderer.js');

export const render = renderer(commerceEnv);
