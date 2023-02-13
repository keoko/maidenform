/* eslint-disable import/prefer-default-export */

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
