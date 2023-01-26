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

function SelectionDisplay({ selection }) {
  return html`
      <div class="sidebar-section">
          <h4 class="variant-selection">
              <span>SELECTION: </span>
              <span>
                    ${selection.color} ${selection.bandSize}${selection.cupSize} 
                  </span>
          </h4>
      </div>
  `;
}

export default class ProductDetailsSidebar extends Component {
  constructor() {
    super();

    // Subject to change once commerce endpoint is available
    const product = {
      name: 'Everyday Full Coverage Cushioned Underwire Bra',
      price: {
        actual: '$48.00',
        reduced: '$28.80',
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
          <${NameAndPrice} shimmer=${this.props.shimmer} name=${this.state.product.name} price=${this.state.product.price} />
      </div>
      <div class=${`sidebar ${this.props.shimmer ? 'shimmer' : ''}`}>
          ${this.props.shimmer || html`
            <div class="product-title sidebar-section mobile-hidden">
              <${Rating} value=${this.state.product.rating} />
              <${NameAndPrice} name=${this.state.product.name} price=${this.state.product.price} />
          </div>
          <${ColorSelector} 
                  colors=${this.state.product.colors}
                  onChange=${(color) => this.updateSelection({ color })}
                  selectedColor=${this.state.selection.color}
          />
          <${SizeSelector} 
                  sizeType="Band Size" 
                  allSizes=${[34, 36, 38, 40, 42]} 
                  unavailableSizes=${[38]} 
                  selectedSize=${this.state.selection.bandSize}
                  onChange=${(size) => this.updateSelection({ bandSize: size })}
          />
          <${SizeSelector} 
                  sizeType="Cup Size" 
                  allSizes=${['B', 'C', 'D', 'DD']} 
                  unavailableSizes=${['DD']}
                  selectedSize=${this.state.selection.cupSize}
                  onChange=${(size) => this.updateSelection({ cupSize: size })}
          />
          <${SelectionDisplay} selection=${this.state.selection} />
          <${QuantitySelector} />
          <${CartSection} />
        `}
      </div>
    </Fragment>`;
  }
}
