import { importFromStorefrontSDK } from './config.js';

const { Panels } = await importFromStorefrontSDK('/cart/containers/Panels.js');

export default Panels;
