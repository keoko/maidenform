// Use local version of Storefront SDK
const mfeRootPath = '/scripts/storefront-sdk';

export const storeView = 'maidenform_store_view';

/* export const commerceEnv = {
  endpoint: 'https://www.marbec.click/graphql-maidenform',
}; */

export const commerceEnv = {
  endpoint: 'https://graph.adobe.io/api/63e62e43-8eb8-45a2-b0f6-f7c3845093db/graphql?api_key=2c6d06bb3aef463db8485c88a90f563f',
  mesh: 'storefrontstaticenvmesh',
};

export const importFromStorefrontSDK = (path) => import(mfeRootPath + path);

const { renderer } = await importFromStorefrontSDK('/cart/renderer.js');

export const render = renderer(commerceEnv);
