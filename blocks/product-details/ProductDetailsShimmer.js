import {
  h, Fragment
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

export default function ProductDetailsShimmer() {
  return html`<${Fragment}>
      <div class="desktop-hidden title-shimmer">
          <div class="heading-shimmer shimmer"></div>
          <div class="price-shimmer shimmer"></div>
      </div>
      <div class="carousel-shimmer">
          <div class="carousel-thumbnails-shimmer shimmer"></div>
          <div class="carousel-stage-shimmer shimmer"></div>
      </div>
      <div class="sidebar-shimmer shimmer"></div>
      <div class="detail-shimmer shimmer mobile-hidden"></div>
  </Fragment>`;
}
