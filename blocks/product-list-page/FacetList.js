import {
  h, Component,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

const facetTypeMapping = {
  bra_type: {
    type: 'radio',
  },
  silhouette: {
    type: 'swatch',
    style: 'facet-size',
  },
};

function Facet({
  title, attribute, buckets, selection, onSelectionChange,
}) {
  // Define type (scalar, stats or range)
  // const firstBucket = buckets[0];
  // const type = firstBucket.__typename;

  // Infer display type based on name + type combinations, fallback to default
  let displayType = 'checkbox';
  let displayStyle = '';

  if (facetTypeMapping[attribute]) {
    displayType = facetTypeMapping[attribute].type;
    displayStyle = facetTypeMapping[attribute].style;
  }

  const renderOptions = () => {
    const handleClickSingle = (event) => {
      const { value } = event.target;
      if (selection.includes(value)) {
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
              value=${bucket.id}
              style="${bucket.color ? `background: ${bucket.color}` : ''}"
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
    return null;
  };

  return html`
  <div class="facet ${displayType} ${displayStyle || ''}">
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
