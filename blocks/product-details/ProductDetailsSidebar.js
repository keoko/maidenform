import { Component, Fragment, h } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Icon from './Icon.js';
import { renderPrice } from '../../scripts/commerce.js';

const html = htm.bind(h);

function SizeSelector({
  sizeType, allSizes, onChange, selectedSize, unavailableSizes,
}) {
  const sortedSizes = allSizes.sort((a, b) => (a.title < b.title ? -1 : 1));

  return html`
      <div class="sidebar-section sizes-selector">
          <h4>AVAILABLE ${sizeType.toUpperCase()}</h4>
          <span class="size-guide">Size Guide</span>
          <ul>
              ${sortedSizes.map((size) => html`
                <li key=${size}>
                    <button
                        aria-selected=${size === selectedSize}
                        onClick=${unavailableSizes?.includes(size) || (() => onChange?.(size))}
                        disabled=${unavailableSizes?.includes(size)}
                    >
                        ${size.title}
                    </button>
                </li>
              `)}
          </ul>
      </div>
  `;
}

function QuantitySelector({ onChange }) {
  return html`
      <div class="sidebar-section quantity-select">
          <h4 class="selection">QUANTITY:</h4>
          <select onchange=${(event) => onChange?.(Number.parseInt(event.target.value, 10))}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
          </select>
      </div>
  `;
}

function NameAndPriceShimmer() {
  return html`
      <div class="desktop-hidden title-shimmer">
          <div class="heading-shimmer shimmer"></div>
          <div class="price-shimmer shimmer"></div>
      </div>
  `;
}

function NameAndPrice({ shimmer, product }) {
  const {
    priceRange, price, name, sku,
  } = product;

  if (shimmer || !(priceRange || price)) {
    return html`<${NameAndPriceShimmer} />`;
  }

  const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const priceHtml = renderPrice(product, priceFormatter.format, html, Fragment);
  return html`
    <${Fragment}>
        <h1 dangerouslySetInnerHTML=${{ __html: name }}></h1>
        <div class="price" >
            ${priceHtml}
        </div>
        <div class="style-id">Style #${sku}</div>
    <//>
  `;
}

function Rating({ value, count }) {
  return html`
      <div class="rating">
          <div style="--rating: ${value ?? 0};"></div>
          <span>(${count})</span>
      </div>
  `;
}

function ColorSelector({
  colors, onChange, selectedColor, unavailableColors,
}) {
  const unavailableNames = unavailableColors?.map((c) => c.title);
  return html`
      <div class="sidebar-section color-selector">
          <h4>AVAILABLE COLOR</h4>
          <ul class="swatches">
              ${colors.map((color) => html`
                      <li
                        key=${color.title}  
                        class="swatch" 
                        >
                          <button aria-selected=${color.title === selectedColor}
                                  disabled=${unavailableNames?.includes(color.title)}
                                  data-swatch-name=${color.title}
                                  style="background: url(${color.url}) no-repeat center;" 
                                  onClick=${unavailableNames?.includes(color.title) || (() => onChange?.(color))} 
                          ></button>
                      </li>
                  `)}
          </ul>
          <div class="selected-swatch-name">${selectedColor}</div>
      </div>
  `;
}

function CartSection({ onAddToCart, canAddToCart }) {
  return html`<div class="sidebar-section cart">
          <button 
                  disabled=${!canAddToCart()} 
                  onclick=${onAddToCart} 
                  class="button primary cart-button">Add to Bag</button>
          <p>Pay in 4 interest free payments on purchases of $30-$1,500 with PayPal
          </p>
          <p class="secondary-action"><${Icon} name="heart" />ADD TO FAVORITES</p>
          <p class="secondary-action"><${Icon} name="envelope" />EMAIL</p>
          <p><a href="/customer-service">Need Help?</a></p>
      </div>`;
}

function SelectionDisplay({ selection, productOptions }) {
  return html`
      <div class="sidebar-section">
          <h4 class="variant-selection">
              <span>SELECTION: </span>
              <span>
                ${selection.color?.title} ${productOptions.map((option) => selection[option.id]?.title).join(' ')}
              </span>
          </h4>
      </div>
  `;
}

function roundToHalf(num) {
  return Math.round(num * 2) / 2;
}

function toColorName(name) {
  return name.replace(/[^A-Za-z0-9]/ig, '');
}

export default class ProductDetailsSidebar extends Component {
  productFromProps() {
    const { props } = this;

    if (!props.product) {
      return null;
    }

    const { sku } = props.product;

    const colors = props.product.options.find((option) => option.id === 'color').values
      .map((color) => ({
        title: color.title,
        id: color.id,
        url: `https://franklin.maidenform.com/images/swatches/HNS_${sku}/HNS_${sku}_${toColorName(color.title)}_sw.jpg?quality=85&height=36&width=36&fit=bounds&format=webply`,
      }))
      .sort((a, b) => (a.title < b.title ? -1 : 1));

    return {
      name: props.product.name,
      priceRange: props.product.priceRange,
      price: props.product.price,
      sku,
      rating: roundToHalf(props.product.reviewStats?.average ?? 0),
      numReviews: props.product.reviewStats?.count ?? 0,
      colors,
      options: props.product.options.filter((option) => option.id !== 'color'),
    };
  }

  constructor(props) {
    super(props);

    this.updateSelection = this.updateSelection.bind(this);
    this.canAddToCart = this.canAddToCart.bind(this);
  }

  updateSelection(fragment) {
    this.props.onSelectionChanged?.(fragment);
  }

  canAddToCart() {
    return Object.keys(this.props.selection).length === this.props.product.options.length;
  }

  render() {
    if (this.props.loading) {
      return html`<div class="sidebar shimmer"></div>`;
    }

    const product = this.productFromProps();

    const hasColors = product?.colors && product?.colors.length > 0;
    const allProductOptions = product?.options.filter((option) => option.values.length > 0);

    return html`<${Fragment}>
      <div class="product-title desktop-hidden">
          <${NameAndPrice} shimmer=${this.props.shimmer} product=${product} />
      </div>
      <div class=${`sidebar ${this.props.shimmer ? 'shimmer' : ''}`}>
          ${this.props.shimmer || html`
            <div class="product-title sidebar-section mobile-hidden">
              <${Rating} value=${product?.rating ?? 0} count=${product?.numReviews} />
              <${NameAndPrice} product=${product} />
          </div>
            ${hasColors && html`
              <${ColorSelector}
                  colors=${product?.colors}
                  unavailableColors=${product?.colors.filter((color) => !this.props.inStockVariants?.color?.includes(color.id))}
                  onChange=${(color) => this.updateSelection({ color })}
                  selectedColor=${this.props?.selection?.color?.title}
              />`}
            ${allProductOptions?.map((option) => html`
                <${SizeSelector} 
                      sizeType=${option.title}
                      allSizes=${option.values} 
                      unavailableSizes=${option.values.filter((size) => !this.props.inStockVariants?.[option.id]?.includes(size.id))}
                      selectedSize=${this.props.selection[option.id]}
                      onChange=${(size) => this.updateSelection({ [option.id]: size })}
                />`)}
            ${(allProductOptions?.length > 0 || hasColors) && html`
                <${SelectionDisplay} selection=${this.props.selection} productOptions=${product?.options} />`}
          <${QuantitySelector} onChange=${this.props.onQuantityChanged} />
          <${CartSection} onAddToCart=${this.props.onAddToCart} canAddToCart=${this.canAddToCart} />
        `}
      </div>
    <//>`;
  }
}
