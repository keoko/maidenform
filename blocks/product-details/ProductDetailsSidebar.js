import { Component, Fragment, h } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';
import Icon from './Icon.js';

const html = htm.bind(h);

function SizeSelector({
  sizeType, allSizes, unavailableSizes, onChange, selectedSize,
}) {
  return html`
      <div class="sidebar-section sizes-selector">
          <h4>AVAILABLE ${sizeType.toUpperCase()}</h4>
          <span class="size-guide">Size Guide</span>
          <ul>
              ${allSizes.map((size) => html`
                <li key=${size}>
                    <button
                        aria-selected=${size === selectedSize}
                        onClick=${unavailableSizes?.includes(size) || (() => onChange?.(size))}
                        aria-disabled=${unavailableSizes?.includes(size)}
                    >
                        ${size}
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
          <select onChange=${(option) => onChange?.(option.value)}>
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

function NameAndPrice({
  name, price, sku, shimmer,
}) {
  if (shimmer) {
    return html`<${NameAndPriceShimmer} />`;
  }

  return html`
    <${Fragment}>
        <h1>${name}</h1>
        <div class="price">
            <span class="price-reduced">${price?.actual}</span>
            <span class="price-actual">${price?.reduced}</span>
        </div>
        <div class="style-id">Style #${sku}</div>
    </Fragment>
  `;
}

function Rating({ value, count }) {
  return html`
      <div class="rating">
          <div style="--rating: ${value};"></div>
          <span>(${count})</span>
      </div>
  `;
}

function ColorSelector({ colors, onChange, selectedColor }) {
  return html`
      <div class="sidebar-section color-selector">
          <h4>AVAILABLE COLOR</h4>
          <ul class="swatches">
              ${colors.map((color) => html`
                      <li
                        key=${color.name}  
                        class="swatch" 
                        >
                          <button aria-selected=${color.name === selectedColor}
                                  data-swatch-name=${color.name}
                                  style="background: url(${color.url}) no-repeat center;" 
                                  onClick=${() => onChange?.(color.name)} ></button>
                      </li>
                  `)}
          </ul>
          <div class="selected-swatch-name">${selectedColor}</div>
      </div>
  `;
}

function CartSection() {
  return html`<${Fragment}>
      <div class="sidebar-section cart">
          <button class="button primary cart-button">Add to Bag</button>
          <p>Pay in 4 interest free payments on purchases of $30-$1,500 with PayPal
          </p>
          <p class="secondary-action"><${Icon} name="heart" />ADD TO FAVORITES</p>
          <p class="secondary-action"><${Icon} name="envelope" />EMAIL</p>
          <p><a href="/customer-service">Need Help?</a></p>
      </div>
  </>
  `;
}

function SelectionDisplay({ selection, productOptions }) {
  return html`
      <div class="sidebar-section">
          <h4 class="variant-selection">
              <span>SELECTION: </span>
              <span>
                    ${selection.color} ${productOptions.map((option) => selection[option.id]).join(' ')}
                  </span>
          </h4>
      </div>
  `;
}

function roundToHalf(num) {
  return Math.round(num * 2) / 2;
}

export default class ProductDetailsSidebar extends Component {
  productFromProps() {
    const { props } = this;

    if (!props.product) {
      return null;
    }

    const priceFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: props.product.priceRange.maximum.regular.amount.currency,
    });

    return {
      name: props.product.name,
      price: {
        actual: `${priceFormatter.format(props.product.priceRange.maximum.regular.amount.value)}`,
        reduced: `${priceFormatter.format(props.product.priceRange.maximum.final.amount.value)}`,
      },
      sku: props.product.sku,
      rating: roundToHalf(props.product.reviewStats.average) ?? 0,
      numReviews: props.product.reviewStats.count ?? 0,
      colors: [
        {
          name: 'Black',
          url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_Black_sw.jpg?quality=85&height=50&width=50&fit=bounds',
        },
        {
          name: 'White',
          url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_White_sw.jpg?quality=85&height=50&width=50&fit=bounds',
        },
        {
          name: 'Black and Navy Blossoms Print',
          url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_BlackandNavyBlossomsPrint_sw.jpg?quality=85&height=50&width=50&fit=bounds',
        },
        {
          name: 'Sandshell',
          url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_Sandshell_sw.jpg?quality=85&height=50&width=50&fit=bounds',
        },
        {
          name: 'Body Beige',
          url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_BodyBeige_sw.jpg?quality=85&height=50&width=50&fit=bounds',
        },
        {
          name: 'Ivory',
          url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_Ivory_sw.jpg?quality=85&height=50&width=50&fit=bounds',
        },
        {
          name: 'Bleached Indigo',
          url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_BleachedIndigo_sw.jpg?quality=85&height=50&width=50&fit=bounds',
        },
        {
          name: 'Chestnut',
          url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_Chestnut_sw.jpg?quality=85&height=50&width=50&fit=bounds',
        },
        {
          name: 'Lilac Meringue',
          url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_LilacMeringue_sw.jpg?quality=85&height=50&width=50&fit=bounds',
        },
      ],
      options: props.product.options.filter((option) => option.id !== 'color'),
    };
  }

  constructor(props) {
    super(props);

    if (props.shimmer) {
      return;
    }

    this.state = {
      selection: {
        color: 'Black',
        cupSize: null,
        bandSize: null,
      },
    };
  }

  updateSelection(fragment) {
    this.setState((state) => ({ selection: { ...state.selection, ...fragment } }));
  }

  render() {
    const product = this.productFromProps();
    return html`<${Fragment}>
      <div class="product-title desktop-hidden">
          <${NameAndPrice} shimmer=${this.props.shimmer} name=${product?.name} price=${product?.price} sku=${product?.sku} />
      </div>
      <div class=${`sidebar ${this.props.shimmer ? 'shimmer' : ''}`}>
          ${this.props.shimmer || html`
            <div class="product-title sidebar-section mobile-hidden">
              <${Rating} value=${product?.rating} count=${product?.numReviews} />
              <${NameAndPrice} name=${product?.name} price=${product?.price} sku=${product?.sku} />
          </div>
          <${ColorSelector} 
                  colors=${product?.colors}
                  onChange=${(color) => this.updateSelection({ color })}
                  selectedColor=${this.state.selection.color}
          />
          ${product?.options.map((option) => html`
            <${SizeSelector} 
                  sizeType=${option.title}
                  allSizes=${option.values.map((value) => value.title)} 
                  unavailableSizes=${[]}
                  selectedSize=${this.state.selection[option.id]}
                  onChange=${(size) => this.updateSelection({ [option.id]: size })}
            />
          `)}
            
          <${SelectionDisplay} selection=${this.state.selection} productOptions=${product?.options} />
          <${QuantitySelector} />
          <${CartSection} />
        `}
      </div>
    </Fragment>`;
  }
}
