import { importFromStorefrontSDK } from './config.js';

const cartApi = await importFromStorefrontSDK('/cart/api.js');

export default cartApi;
