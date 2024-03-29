/* eslint-disable object-curly-spacing */
import {
  h, Component, createRef, Fragment,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import {
  performCatalogServiceQuery,
  PLACEHOLDER_IMG,
  productOptionImageQuery,
  renderFallbackImage,
  renderPrice,
} from '../../scripts/commerce.js';

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
      selectedVariant: null,
      imageForOption: {},
    };

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

  async selectVariant(optionId) {
    const newImageForOption = { ...this.state.imageForOption };

    // Load image for option if not available
    if (!this.state.imageForOption[optionId]) {
      try {
        const option = await performCatalogServiceQuery(productOptionImageQuery, {
          sku: this.props.product.sku,
          optionIds: [optionId],
        });
        const { images } = option.refineProduct;
        if (images && images.length > 0) {
          // Transform image
          const url = images[0].url
            .replace('productH', 'product/H')
            .replace('productM', 'product/M')
            .replace('cdn.maidenform.com', 'franklin.maidenform.com/images/catalog');

          newImageForOption[optionId] = url;
        }
      } catch (err) {
        console.error('Could not load image for option', err);
      }
    }

    this.setState({ selectedVariant: optionId, imageForOption: newImageForOption });
  }

  renderImage(loading = 'lazy') {
    const { product } = this.props;
    const { selectedVariant, imageForOption } = this.state;

    // Placeholder as fallback
    let image = PLACEHOLDER_IMG;

    // Use base image if available
    if (product.images && product.images.length > 0) {
      image = product.images[0].url;
    }

    // Use option image if available
    if (selectedVariant && imageForOption[selectedVariant]) {
      image = imageForOption[selectedVariant];
    }

    const url = new URL(image);
    url.search = '';

    return html`<picture>
      <source type="image/webp" srcset="${url}?width=163&bg-color=255,255,255&format=webply&optimize=medium" media="(max-width: 900px)" />
      <source type="image/webp" srcset="${url}?width=330&bg-color=255,255,255&format=webply&optimize=medium" />
      <img class="product-image-photo" src="${url}?width=330&quality=100&bg-color=255,255,255" max-width="330" max-height="396" alt=${product.name} loading=${loading} onerror=${renderFallbackImage} />
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

    const isMobile = window.matchMedia('only screen and (max-width: 900px)').matches;
    const numberOfEagerImages = isMobile ? 2 : 4;

    return html`
      <li>
        <div class="picture">
          <a href="/products/${product.url_key}/${product.sku}">
            ${this.renderImage(index < numberOfEagerImages ? 'eager' : 'lazy')}
          </a>
          <button class="add-to-cart-action">Add to Bag</button>
        </div>
        <div class="variants">
          <button class="previous" onClick=${this.swatchScrollLeft}>Previous</button>
          <div class="swatches" ref=${this.variantsRef}>
            ${product.swatches.map(({ id, image, title }, i) => html`
              <button
                class="swatch ${id === state.selectedVariant || (i === 0 && !state.selectedVariant) ? 'active' : ''}"
                value=${id}
                style="background: url('${image}?width=26&quality=85&fit=bounds') no-repeat center;"
                onClick=${() => this.selectVariant(id)}>${title}</button>
            `)}
            </div>
          <button class="next" onClick=${this.swatchScrollRight}>Next</button>
        </div>
        <div class="name">
          <a href="/products/${product.url_key}/${product.sku}" dangerouslySetInnerHTML=${{__html: product.name}} />
        </div>
        <div class="price">${renderPrice(product, this.formatter.format, html, Fragment)}</div>
        <div class="rating">
          ${product.rating !== 'loading' && html`<${Fragment}>
            <div style="--rating: ${product.rating.average};"></div>
            <span>(${product.rating.count})</span>
          <//>`}
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
