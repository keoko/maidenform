import {
  h, Component,
} from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

function Facet({
  name, id, type, options, selection, onSelectionChange,
}) {
  const renderOptions = () => {
    const handleClickSingle = (event) => {
      const { value } = event.target;
      if (selection.includes(value)) {
        onSelectionChange(id, []);
      } else {
        onSelectionChange(id, [value]);
      }
    };

    const handleClickMultiple = (event) => {
      const { value } = event.target;
      if (selection.includes(value)) {
        onSelectionChange(id, selection.filter((selected) => selected !== value));
      } else {
        onSelectionChange(id, [...selection, value]);
      }
    };

    if (type === 'swatch') {
      return options.map((option) => html`
          <li>
            <button
              value=${option.value}
              style="${option.color ? `background: ${option.color}` : ''}"
              class="${selection.includes(option.value) ? 'active' : ''}"
              onClick=${handleClickMultiple}>${option.name}</button>
          </li>
        `);
    }
    if (type === 'checkbox') {
      return options.map((option) => html`<li>
          <input type="checkbox" name="facet-${id}" id="facet-${option.value}" value=${option.value} checked=${selection.includes(option.value)} onClick=${handleClickMultiple} />
          <label for="facet-${option.value}">
            ${option.name} <span class="count">${option.count}</span>
          </label>
        </li>`);
    }
    if (type === 'radio') {
      return options.map((option) => html`<li>
          <input type="radio" name="facet-${id}" id="facet-${option.value}" value=${option.value} checked=${selection.includes(option.value)} onClick=${handleClickSingle} />
          <label for="facet-${option.value}">
            ${option.name} <span class="count">${option.count}</span>
          </label>
        </li>`);
    }
    return null;
  };

  return html`
  <div class="facet ${type} ${`facet-${id}`}">
    <input type="checkbox" id="facet-toggle-${id}" checked=${selection.length > 0}  />
    <label for="facet-toggle-${id}">${name}</label>
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
            ${facets.map((facet) => {
    const selection = filters[facet.id] || [];
    return html`<${Facet} ...${facet} selection=${selection} onSelectionChange=${this.onSelectionChange} />`;
  })}
        </div>
      </div>`;
  }
}
