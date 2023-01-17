import {
  h, render, Fragment,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Carousel from './ProductDetailsCarousel.js';
import Sidebar from './ProductDetailsSidebar.js';

const html = htm.bind(h);

function ProductDetailPage() {
  return html`
  <${Fragment} >
      <${Carousel} />
      <${Sidebar} />
      <div class="product-detail-description">
          <h3>PRODUCT DETAILS</h3>
          <p>
              Cushioned wire for all-day comfort.
          <ul><li>Full-coverage cups</li><li>Super-soft fabric</li><li>Lightly lined, cloud-foam cups</li><li>Side and back smoothing</li><li>Comfort Devotion® collection</li></ul>
          </p>
      </div>
  </>`;
}

export default function decorate($block) {
  $block.innerHTML = '';
  const app = html`<${ProductDetailPage} />`;

  render(app, $block);
}