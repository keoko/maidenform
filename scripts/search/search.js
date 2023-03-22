import {
  Component, Fragment, h, render,
} from '../preact.js';
import htm from '../htm.js';
import { loadCSS } from '../lib-franklin.js';

const html = htm.bind(h);

// Used to rate-limit link rewriting, to prevent excessive calls to the Monolith GraphQL API
class RateLimiter {
  constructor(limit) {
    this.limit = limit;
    this.lastCallAt = null;
    this.nextCallTimeout = null;
  }

  execute(fn) {
    if ((this.lastCallAt && ((Date.now() - this.lastCallAt) >= this.limit)) || !this.lastCallAt) {
      this.lastCallAt = Date.now();
      fn();
    } else {
      const remaining = this.limit - (Date.now() - this.lastCallAt);
      if (this.nextCallTimeout) {
        clearTimeout(this.nextCallTimeout);
      }
      this.nextCallTimeout = setTimeout(() => {
        this.lastCallAt = Date.now();
        fn();
      }, remaining);
    }
  }
}

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.searchBarElement = props.searchBarElement;
    this.state = { hidden: false, query: '' };
    this.rateLimiter = new RateLimiter(1000);
  }

  handleChange = (event) => {
    this.rateLimiter.execute(() => {
      this.setState({ query: event.target.value });
    });
  };

  handleFocus = () => {
    this.setState({ hidden: false });
  };

  handleBlur = () => {
    this.setState({ hidden: true });
  };

  componentDidMount() {
    this.searchBarElement.addEventListener('keyup', this.handleChange);
    this.searchBarElement.addEventListener('blur', this.handleBlur);
    this.searchBarElement.addEventListener('focus', this.handleFocus);
  }

  componentWillUnmount() {
    this.searchBarElement.removeEventListener('keyup', this.handleChange);
    this.searchBarElement.removeEventListener('blur', this.handleBlur);
    this.searchBarElement.removeEventListener('focus', this.handleFocus);
  }

  render() {
    return html`<div class="search-recs" hidden="${this.state.hidden}">
        <div class="top-results">
            <div class="search-recs-title">TOP RESULTS ${this.state.query && 'IN'} ${this.state.query.toUpperCase()}</div>
        </div>
        <div class="related-searches">
            <div class="search-recs-title">RELATED SEARCHES</div>
        </div>
        <div class="categories">
            <div class="search-recs-title">CATEGORIES</div>
        </div>
    </div>`;
  }
}

export default async function initializeSearchRecommendations(searchBarElement) {
  // eslint-disable-next-line no-promise-executor-return
  await new Promise((resolve) => loadCSS('../../styles/search-recommendations.css', resolve));
  const parent = document.body;
  const searchBoxPlaceholder = document.createElement('div');
  parent.appendChild(searchBoxPlaceholder);
  render(html`<${SearchBox} searchBarElement=${searchBarElement} />`, searchBoxPlaceholder);
}
