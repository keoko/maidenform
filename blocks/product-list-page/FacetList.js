import {
  h, Component,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

// Hardcoded color_family id to hex mapping
const facetColorIdToStyleMapping = {
  Black: 'background: #000000',
  Blue: 'background: #4572ba',
  Brown: 'background: #91572d',
  Bronze: 'background: #cc8b4e',
  Dot: 'background-image: url((https://franklin.maidenform.com/images/catalog/attribute/swatch/swatch_image/30x20/c/o/colorfamily_dot.jpg)',
  Grey: 'background: #808080',
  Green: 'background: #367a36',
  Ivory: 'background: #fffff0',
  Nude: 'background: #ffdead',
  Pink: 'background: #ffc0cb',
  Purple: 'background: #782078',
  Print: 'background-image: url(https://franklin.maidenform.com/images/catalog/attribute/swatch/swatch_image/30x20/c/o/colorfamily_print.jpg)',
  Red: 'background: #d12626',
  Stripe: 'background-image: url((https://franklin.maidenform.com/images/catalog/attribute/swatch/swatch_image/30x20/c/o/colorfamily_stripe.jpg)',
  White: 'background: #ffffff',
};

const facetTypeMapping = {
  silhouette: {
    type: 'checkbox',
  },
  size: {
    type: 'swatch',
    style: 'facet-size',
  },
  bandsize: {
    type: 'swatch',
    style: 'facet-size',
  },
  cupsize: {
    type: 'swatch',
    style: 'facet-size',
  },
  color_family: {
    type: 'swatch',
    style: 'facet-color',
  },
  price: {
    type: 'price',
  },
};

function Facet({
  title, attribute, buckets, selection, onSelectionChange,
}) {
  // Infer display type based on facetTypeMapping, fallback to default
  let displayType = 'radio';
  let displayStyle = '';

  if (facetTypeMapping[attribute]) {
    displayType = facetTypeMapping[attribute].type;
    displayStyle = facetTypeMapping[attribute].style;
  }

  const renderOptions = () => {
    const handleClickSingle = (event) => {
      const { value } = event.target;
      if (attribute === 'price') {
        const [from, to] = value.split(',').map((v) => parseInt(v, 10) || 0);
        if (selection[0] === from && selection[1] === to) {
          onSelectionChange(attribute, []);
        } else {
          onSelectionChange(attribute, [from, to]);
        }
      } else if (selection.includes(value)) {
        onSelectionChange(attribute, []);
      } else {
        onSelectionChange(attribute, [value]);
      }
    };

    const handleClickMultiple = (event) => {
      const { value } = event.target;
      if (selection.includes(value)) {
        onSelectionChange(attribute, selection.filter((selected) => selected !== value));
      } else {
        onSelectionChange(attribute, [...selection, value]);
      }
    };

    if (displayType === 'swatch') {
      return buckets.map((bucket) => html`
          <li>
            <button
              title=${bucket.title}
              value=${bucket.id}
              style="${facetColorIdToStyleMapping[bucket.id] ? facetColorIdToStyleMapping[bucket.id] : ''}"
              class="${selection.includes(bucket.id) ? 'active' : ''}"
              onClick=${handleClickMultiple}>${bucket.title}</button>
          </li>
        `);
    }
    if (displayType === 'checkbox') {
      return buckets.map((bucket) => html`<li>
          <input type="checkbox" name="facet-${attribute}" id="facet-${bucket.id}" value=${bucket.id} checked=${selection.includes(bucket.id)} onClick=${handleClickMultiple} />
          <label for="facet-${bucket.id}">
            ${bucket.title} <span class="count">${bucket.count}</span>
          </label>
        </li>`);
    }
    if (displayType === 'radio') {
      return buckets.map((bucket) => html`<li>
          <input type="radio" name="facet-${attribute}" id="facet-${bucket.id}" value=${bucket.id} checked=${selection.includes(bucket.id)} onClick=${handleClickSingle} />
          <label for="facet-${bucket.id}">
            ${bucket.title} <span class="count">${bucket.count}</span>
          </label>
        </li>`);
    }
    if (displayType === 'price') {
      return buckets.map((bucket) => {
        const id = `${bucket.from},${bucket.to}`;
        const checked = selection[0] === bucket.from && selection[1] === bucket.to;
        return html`<li>
          <input type="radio" name="facet-${attribute}" id="facet-${id}" value=${id} checked=${checked} onClick=${handleClickSingle} />
          <label for="facet-${id}">
            ${bucket.title} <span class="count">${bucket.count}</span>
          </label>
        </li>`;
      });
    }
    return null;
  };

  return html`<div class="facet ${displayType} ${displayStyle || ''}">
    <input type="checkbox" id="facet-toggle-${attribute}" checked=${selection.length > 0}  />
    <label for="facet-toggle-${attribute}">${title}</label>
    <div class="facet-content">
        <ol>${renderOptions()}</ol>
    </div>
  </div>`;
}

export default class FacetList extends Component {
  onSelectionChange = (facet, selection) => {
    const newFilters = { ...this.props.filters };
    newFilters[facet] = selection;
    this.props.onFilterChange(newFilters);
  };

  // eslint-disable-next-line class-methods-use-this
  render({
    facetMenuRef, facets, filters, loading,
  }) {
    if (loading) {
      return html`<div class="facets shimmer"></div>`;
    }

    return html`
      <div class="facets ${loading ? 'shimmer' : ''}" ref=${facetMenuRef}>
          <h2>Filters</h2>
          <button class="close" onClick=${() => facetMenuRef.current.classList.toggle('active')}>Close</button>
          <div class="facet-list">
            ${facets
    .filter((facet) => facet.buckets.length > 0)
    .map((facet) => {
      const selection = filters[facet.attribute] || [];
      return html`<${Facet} ...${facet} selection=${selection} onSelectionChange=${this.onSelectionChange} />`;
    })}
        </div>
      </div>`;
  }
}
