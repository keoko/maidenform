import {
  h, Fragment,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Sidebar from './ProductDetailsSidebar.js';
import Carousel from './ProductDetailsCarousel.js';

const html = htm.bind(h);

export default function ProductDetailsShimmer() {
  return html`<${Fragment}>
      <${Carousel} shimmer />
      <${Sidebar} shimmer />
      <div class="detail-shimmer shimmer mobile-hidden"></div>
  </Fragment>`;
}
