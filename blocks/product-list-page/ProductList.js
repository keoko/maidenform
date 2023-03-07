/* eslint-disable object-curly-spacing */
import {
  h, Component, createRef, Fragment,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import { PLACEHOLDER_IMG, renderFallbackImage } from '../../scripts/commerce.js';

const html = htm.bind(h);

class ProductCard extends Component {
  constructor(props) {
    super();
    this.variantsRef = createRef();
    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    this.state = {
      selectedVariant: 0,
    };

    // TODO: Call refineProduct for selection of variant

    this.baseProduct = props.product;
    this.resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const swatches = entry.target;
        const variants = swatches.closest('.variants');
        if (swatches.scrollWidth > variants.offsetWidth) {
          variants.classList.add('scrollable');
        } else {
          variants.classList.remove('scrollable');
        }
      });
    });
  }

  swatchScrollLeft = () => {
    this.variantsRef.current.scrollLeft -= 132;
  };

  swatchScrollRight = () => {
    this.variantsRef.current.scrollLeft += 132;
  };

  componentWillUnmount() {
    this.resizeObserver.disconnect();
  }

  componentDidUpdate(prevProps) {
    // Register resize observer when loading is done
    if (prevProps.loading !== this.props.loading) {
      if (!this.props.loading) {
        this.resizeObserver.observe(this.variantsRef.current);
      } else {
        this.resizeObserver.disconnect();
      }
    }
  }

  renderPrice(product) {
    // Simple product
    if (product.price) {
      // Find out if regular and final are different
      const { regular, final } = product.price;
      if (regular.amount.value === final.amount.value) {
        return html`<span>${this.formatter.format(final.amount.value)}</span>`;
      }
      return html`<${Fragment}>
        <span class="old-price">${this.formatter.format(regular.amount.value)}</span> <span>${this.formatter.format(final.amount.value)}</span>
      </${Fragment}>`;
    }

    // Complex product
    if (product.priceRange) {
      const { regular, final } = product.priceRange.minimum;
      if (regular.amount.value === final.amount.value) {
        return html`<span>from ${this.formatter.format(final.amount.value)}</span>`;
      }
      return html`<${Fragment}>
        <span class="old-price">${this.formatter.format(regular.amount.value)}</span> from <span>${this.formatter.format(final.amount.value)}</span>
      </${Fragment}>`;
    }

    return null;
  }

  static renderImage(name, image, loading = 'lazy') {
    // Placeholder
    const displayImage = image || PLACEHOLDER_IMG;

    const url = new URL(displayImage);
    url.search = '';

    return html`<picture>
      <source type="image/webp" srcset="${url}?width=163&bg-color=255,255,255&format=webply&optimize=medium" media="(max-width: 900px)" />
      <source type="image/webp" srcset="${url}?width=330&bg-color=255,255,255&format=webply&optimize=medium" />
      <img class="product-image-photo" src="${url}?width=330&quality=100&bg-color=255,255,255" max-width="330" max-height="396" alt=${name} loading=${loading} onerror=${renderFallbackImage} />
    </picture>`;
  }

  render({ product, loading, index }, state) {
    if (loading) {
      return html`
      <li>
        <div class="picture shimmer"></div>
        <div class="variants"></div>
        <div class="name">
          <div class="shimmer shimmer-text"></div>
          <div class="shimmer shimmer-text" style="max-width: 70%"></div>
        </div>
        <div class="price">
          <div class="shimmer shimmer-text" style="max-width: 30%"></div>
        </div>
        <div class="rating"></div>
      </li>`;
    }

    return html`
      <li>
        <div class="picture">
          <a href="https://pdp-catalog-service--maidenform--hlxsites.hlx.live/products/${product.url_key}/${product.sku}">
            ${ProductCard.renderImage(product.name, product.images[0].url, index < 1 ? 'eager' : 'lazy')}
          </a>
          <button class="add-to-cart-action">Add to Bag</button>
        </div>
        <div class="variants">
          <button class="previous" onClick=${this.swatchScrollLeft}>Previous</button>
          <div class="swatches" ref=${this.variantsRef}>
            ${product.swatches.map(({ id, image, title }, i) => html`
              <button
                class="swatch ${i === state.selectedVariant ? 'active' : ''}"
                value=${id}
                style="background: url('${image}?width=26&quality=85&fit=bounds') no-repeat center;"
                onClick=${() => this.setState({ selectedVariant: i })}>${title}</button>
            `)}
            </div>
          <button class="next" onClick=${this.swatchScrollRight}>Next</button>
        </div>
        <div class="name">
          <a href="https://pdp-catalog-service--maidenform--hlxsites.hlx.live/products/${product.url_key}/${product.sku}" dangerouslySetInnerHTML=${{__html: product.name}} />
        </div>
        <div class="price">${this.renderPrice(product)}</div>
        <div class="rating">
          <div style="--rating: ${product.rating.average};"></div>
          <span>(${product.rating.count})</span>
        </div>
      </li>`;
  }
}

const ProductList = ({ products, loading, currentPageSize }) => {
  if (loading) {
    return html`<div class="list">
      <ol>
        ${Array(currentPageSize).fill().map(() => html`<${ProductCard} loading=${true} />`)}
      </ol>
    </div>`;
  }

  if (products.items.length === 0) {
    return html`<div class="list">
      <div class="empty">We're sorry, we couldn't find anything that matches your query.</div>
    </div>`;
  }

  return html`<div class="list">
    <ol>${products.items.map((product, index) => html`<${ProductCard} product=${product} index=${index} />`)}</ol>
  </div>`;
};

export default ProductList;
