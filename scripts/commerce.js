/* eslint-disable import/prefer-default-export */

import { getConfigValue } from './configs.js';

export function getSwatchImageUrl(sku, swatch) {
  const swatchUrl = new URL(swatch.sku_image_url);
  swatchUrl.hostname = 'swatches.maidenform.com';
  swatchUrl.search = '';

  let color = swatch.custom_color;
  // Remove and non-alphanumeric characters
  color = color.replace(/[^a-zA-Z0-9]/g, '');

  const filename = swatchUrl.pathname.split('/').pop();
  const prefix = filename.split('_')[0].toUpperCase();
  const extension = filename.split('.').pop();

  swatchUrl.pathname = `${prefix}_${sku}/${prefix}_${sku}_${color}_sw.${extension}`;

  return swatchUrl.toString();
}

export async function getProductRatings(productSkus) {
  const skusString = typeof productSkus === 'object' ? productSkus.join(',') : productSkus;

  const endpoint = await getConfigValue('bazaarvoice-endpoint');
  const api = new URL(`${endpoint}/data/statistics.json`);
  api.searchParams.set('apiversion', '5.4');
  api.searchParams.set('passkey', await getConfigValue('bazaarvoice-passkey'));
  api.searchParams.set('Filter', `ProductId:${skusString}`);
  api.searchParams.set('Stats', 'Reviews');

  const response = await fetch(api);
  if (response.ok) {
    const body = await response.json();
    if (body?.Results?.length === 1) {
      return {
        average: body.Results[0].ProductStatistics.ReviewStatistics?.AverageOverallRating,
        count: body.Results[0].ProductStatistics.ReviewStatistics?.TotalReviewCount,
      };
    }

    return body?.Results?.reduce(
      (obj, product) => ({
        ...obj,
        [product.ProductStatistics.ProductId]: {
          average: product.ProductStatistics.ReviewStatistics?.AverageOverallRating,
          count: product.ProductStatistics.ReviewStatistics?.TotalReviewCount,
        },
      }),
      {},
    );
  }
  return { average: null, count: null };
}
