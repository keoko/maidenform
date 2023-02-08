export default async function decorate(block) {
  const mse = window.magentoStorefrontEvents;
  const dataLayer = window.adobeDataLayer;
  let storefrontStatus = 'StorefrontEvents Not Initialized';
  let dataLayerStatus = 'Datalayer Not Initialized';
  if (mse) {
    storefrontStatus = `StorefrontEvents Initialized as - ${JSON.stringify(mse)}`;
  }
  if (dataLayer) {
    dataLayerStatus = `Datalayer Initialized with Version -  ${dataLayer.version}`;
  }
  block.innerHTML = `${storefrontStatus} <br/> ${dataLayerStatus}`;
}
