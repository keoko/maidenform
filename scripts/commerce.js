/* eslint-disable import/prefer-default-export */

import { getConfigValue } from './configs.js';

export const PLACEHOLDER_IMG = new URL('/product-images/placeholder.jpg', document.baseURI).toString();

export function getSwatchImageUrl(sku, color) {
  // Remove and non-alphanumeric characters
  const colorString = color.replace(/[^a-zA-Z0-9]/g, '');

  return `https://swatches.maidenform.com/HNS_${sku}/HNS_${sku}_${colorString}_sw.jpg`;
}

export function renderFallbackImage(event, fallback = PLACEHOLDER_IMG) {
  const pictureTag = event.target.parentNode;
  for (let i = 0; i < pictureTag.children.length; i += 1) {
    const child = pictureTag.children[i];
    if (child.tagName === 'SOURCE') {
      child.srcset = fallback;
    } else if (child.tagName === 'IMG') {
      child.src = fallback;
    }
  }
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
