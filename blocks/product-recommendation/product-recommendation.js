import { initializeMSEWithStorefrontInstance } from '../../scripts/mse-utils.js';
import { loadScript } from '../../scripts/scripts.js';
import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

function renderPlaceholder(block) {
  block.innerHTML = `<div class="product-grid">
    ${[...Array(5)].map(() => `
        <div class="placeholder">
            <picture><img src="" /></picture>
        </div>
    `).join('')}
  </div>`;
}

function renderItem(product) {
  const container = document.createElement('div');
  container.className = 'product-grid-item';

  const picture = createOptimizedPicture(product.image, product.name, false, [{ width: '220' }]);

  container.innerHTML = `
    <a href="${product.url}/${product.sku}">
      ${picture.outerHTML}
      <h3>${product.name}</h3>
    </a>
  `;

  return container;
}

function renderItems(block, products) {
  const grid = block.querySelector('.product-grid');

  grid.innerHTML = '';

  products.forEach((product) => {
    grid.appendChild(renderItem(product));
  });
}

// TODO once image queries are final, update this code
function getImages(recommendedProducts) {
  return recommendedProducts.map((product) => ({
    ...product,
    image: `/product-images/${product.sku.toLowerCase()}.jpg`,
  }));
}

async function loadRecommendations(block) {
  await initializeMSEWithStorefrontInstance();
  const mse = window.magentoStorefrontEvents;

  // load recommendations sdk
  await new Promise((resolve) => {
    loadScript('/scripts/magento-recommendations-sdk.js', {}, async () => {
      resolve();
    });
  });

  const pageType = mse.context.getPage()?.type ?? 'Product';

  const client = new window.RecommendationsClient({ pageType });
  client.register({
    name: 'Most Viewed Products',
    type: 'most-viewed',
    filters: [],
  });
  mse.publish.recsRequestSent();
  const { status, data } = await client.fetch();

  if (status === 200) {
    const products = data.units?.[0]?.products;
    const productsWithImages = getImages(products);

    renderItems(block, productsWithImages);
  }
}

export default async function decorate(block) {
  renderPlaceholder(block);

  const inViewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loadRecommendations(block);
        inViewObserver.disconnect();
      }
    });
  });
  inViewObserver.observe(block);

  const observer = new MutationObserver(() => {
    block.querySelectorAll('a').forEach((link) => {
      try {
        const url = new URL(link);
        link.href = `/products${url.pathname.replace('.html', '')}`;
        // eslint-disable-next-line no-empty
      } catch {}
    });
  });
  observer.observe(block, { subtree: true, childList: true });
}
