import {
  h, Component, createRef, Fragment,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

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

  renderPrice(price) {
    if (price.sale) {
      return html`<${Fragment}>
          <span class="old-price">${this.formatter.format(price.regular)}</span> <span>${this.formatter.format(price.sale)}</span>
        </${Fragment}>`;
    }
    return html`<span>${this.formatter.format(price.regular)}</span>`;
  }

  static renderImage(name, image) {
    const url = new URL(image);
    url.search = '';

    return html`<picture>
      <source media="(min-width: 320px) and (max-width: 767px)" srcset="${url}?width=420&amp;quality=100&amp;bg-color=255,255,255" />
      <source media="(min-width: 768px) and (max-width: 1024x)" srcset="${url}?width=768&amp;quality=100&amp;bg-color=255,255,255" />
      <img class="product-image-photo"
        srcset="${url}?width=247&amp;quality=100&amp;bg-color=255,255,255&amp;dpr=1 1x,
          ${url}?width=247&amp;quality=100&amp;bg-color=255,255,255&amp;dpr=1.5 1.5x,
          ${url}?width=247&amp;quality=100&amp;bg-color=255,255,255&amp;dpr=2 2x" 
        src="${url}?width=247&amp;quality=100&amp;bg-color=255,255,255" max-width="247" max-height="313" alt=${name} />
    </picture>`;
  }

  render({ product, loading }, state) {
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
          <a href="/products/${product.url_key}--${product.sku}">
            ${ProductCard.renderImage(product.name, product.swatches[state.selectedVariant].product_image)}
          </a>
          <button class="add-to-cart-action">Add to Bag</button>
        </div>
        <div class="variants">
          <button class="previous" onClick=${this.swatchScrollLeft}>Previous</button>
          <div class="swatches" ref=${this.variantsRef}>
            ${product.swatches.map(({ value, image, name }, index) => html`
              <button
                class="swatch ${index === state.selectedVariant ? 'active' : ''}"
                value=${value}
                style="background: url('${image}?width=50&amp;quality=85&amp;fit=bounds') no-repeat center;"
                onClick=${() => this.setState({ selectedVariant: index })}>${name}</button>
            `)}
            </div>
          <button class="next" onClick=${this.swatchScrollRight}>Next</button>
        </div>
        <div class="name">
          <a href="/products/${product.url_key}--${product.sku}">${product.name}</a>
        </div>
        <div class="price">${this.renderPrice(product.price)}</div>
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
    <ol>${products.items.map((product) => html`<${ProductCard} product=${product} />`)}</ol>
  </div>`;
};

export default ProductList;
