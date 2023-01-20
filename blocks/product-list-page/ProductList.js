import {
  h, Component, createRef,
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
      selectedVariant: null,
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

    // TODO
    if (this.state.selectedVariant) {
      console.log('Load variant', this.state.selectedVariant);
    }
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
          <a href="/products/${product.url_key}">
            <picture>
              <source media="(min-width: 320px) and (max-width: 767px)" srcset="${product.image}?width=420&amp;quality=100&amp;bg-color=255,255,255" />
              <source media="(min-width: 768px) and (max-width: 1024x)" srcset="${product.image}?width=768&amp;quality=100&amp;bg-color=255,255,255" />
              <img class="product-image-photo"
                srcset="${product.image}?width=247&amp;quality=100&amp;bg-color=255,255,255&amp;dpr=1 1x,
                  ${product.image}?width=247&amp;quality=100&amp;bg-color=255,255,255&amp;dpr=1.5 1.5x,
                  ${product.image}?width=247&amp;quality=100&amp;bg-color=255,255,255&amp;dpr=2 2x" 
                src="${product.image}?width=247&amp;quality=100&amp;bg-color=255,255,255" max-width="247" max-height="313" alt=${product.name} />
            </picture>
          </a>
          <button class="add-to-cart-action">Add to Bag</button>
        </div>
        <div class="variants">
          <button class="previous" onClick=${this.swatchScrollLeft}>Previous</button>
          <div class="swatches" ref=${this.variantsRef}>
            ${product.swatches.map(({ value, image, name }) => html`
              <button
                class="swatch ${value === state.selectedVariant ? 'active' : ''}"
                value=${value}
                style="background: url('${image}?width=50&amp;quality=85&amp;fit=bounds') no-repeat center;"
                onClick=${(event) => this.setState({ selectedVariant: event.target.value })}>${name}</button>
            `)}
            </div>
          <button class="next" onClick=${this.swatchScrollRight}>Next</button>
        </div>
        <div class="name">
          <a href="/products/${product.url_key}">${product.name}</a>
        </div>
        <div class="price">
          <span class="old-price">${this.formatter.format(product.price.regular)}</span> <span>${this.formatter.format(product.price.sale)}</span>
        </div>
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

  return html`<div class="list">
    <ol>${products.items.map((product) => html`<${ProductCard} product=${product} />`)}</ol>
  </div>`;
};

export default ProductList;
