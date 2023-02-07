import {
  h, Component, Fragment,
} from '../../scripts/preact.js';
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

function NameAndPrice({ name, price, shimmer }) {
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
        <div class="style-id">Style #09436</div>
    </Fragment>
  `;
}

function Rating({ value }) {
  return html`
      <div class="product-rating">
          ${[...Array(5).keys()].map((key) => {
    if (value - key < 0.5) return html`<${Icon} name="star" />`;
    if (value - key > 0.5) return html`<${Icon} name="star-fill" />`;
    return html`<${Icon} name="star-half" />`;
  })}
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

export default class ProductDetailsSidebar extends Component {
  constructor(props) {
    super(props);

    if (props.shimmer) {
      return;
    }

    const priceFormatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: props.product.priceRange.maximum.regular.amount.currency,
    });

    // Subject to change once commerce endpoint is available
    const product = {
      name: props.product.name,
      price: {
        actual: `${priceFormatter.format(props.product.priceRange.maximum.regular.amount.value)}`,
        reduced: `${priceFormatter.format(props.product.priceRange.maximum.final.amount.value)}`,
      },
      rating: 3.5,
      colors: [
        { name: 'Black', url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_Black_sw.jpg?quality=85&height=50&width=50&fit=bounds' },
        { name: 'White', url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_White_sw.jpg?quality=85&height=50&width=50&fit=bounds' },
        { name: 'Black and Navy Blossoms Print', url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_BlackandNavyBlossomsPrint_sw.jpg?quality=85&height=50&width=50&fit=bounds' },
        { name: 'Sandshell', url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_Sandshell_sw.jpg?quality=85&height=50&width=50&fit=bounds' },
        { name: 'Body Beige', url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_BodyBeige_sw.jpg?quality=85&height=50&width=50&fit=bounds' },
        { name: 'Ivory', url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_Ivory_sw.jpg?quality=85&height=50&width=50&fit=bounds' },
        { name: 'Bleached Indigo', url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_BleachedIndigo_sw.jpg?quality=85&height=50&width=50&fit=bounds' },
        { name: 'Chestnut', url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_Chestnut_sw.jpg?quality=85&height=50&width=50&fit=bounds' },
        { name: 'Lilac Meringue', url: 'https://swatches.maidenform.com/HNS_09436/HNS_09436_LilacMeringue_sw.jpg?quality=85&height=50&width=50&fit=bounds' },
      ],
    };

    this.product = props.product;

    const colorOption = props.product.options.find((option) => option.id === 'color');
    if (colorOption) {
      this.colors = colorOption.values.map((value) => ({
        name: value.title,
        url: `https://swatches.maidenform.com/HNS_09436/HNS_09436_${value.title.replace(' ', '')}_sw.jpg?quality=85&height=50&width=50&fit=bounds`,
      }));
      // TODO why are there so many wrong colors
      const lastColorIndex = this.colors.findIndex((color) => color.name.includes('{'));
      if (lastColorIndex > 0) {
        this.colors = this.colors.slice(0, lastColorIndex);
      }
    }

    this.productOptions = props.product.options.filter((option) => option.id !== 'color');

    this.state = {
      selection: {
        color: 'Black',
        cupSize: null,
        bandSize: null,
      },
      product,
    };
  }

  updateSelection(fragment) {
    this.setState((state) => ({ selection: { ...state.selection, ...fragment } }));
  }

  render() {
    return html`<${Fragment}>
      <div class="product-title desktop-hidden">
          <${NameAndPrice} shimmer=${this.props.shimmer} name=${this.state.product?.name} price=${this.state.product?.price} />
      </div>
      <div class=${`sidebar ${this.props.shimmer ? 'shimmer' : ''}`}>
          ${this.props.shimmer || html`
            <div class="product-title sidebar-section mobile-hidden">
              <${Rating} value=${this.state.product?.rating} />
              <${NameAndPrice} name=${this.state.product?.name} price=${this.state.product?.price} />
          </div>
          <${ColorSelector} 
                  colors=${this.state.product.colors}
                  onChange=${(color) => this.updateSelection({ color })}
                  selectedColor=${this.state.selection.color}
          />
          ${this.productOptions.map((option) => html`
            <${SizeSelector} 
                  sizeType="Band Size" 
                  allSizes=${option.values.map((value) => value.title)} 
                  unavailableSizes=${[]}
                  selectedSize=${this.state.selection[option.id]}
                  onChange=${(size) => this.updateSelection({ [option.id]: size })}
            />
          `)}
            
          <${SelectionDisplay} selection=${this.state.selection} productOptions=${this.productOptions} />
          <${QuantitySelector} />
          <${CartSection} />
        `}
      </div>
    </Fragment>`;
  }
}
