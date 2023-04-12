import { performMonolithGraphQLQuery, urlKeyToSkuQuery } from './commerce.js';

let reflektionLoaded = false;

const loadScript = (url, attrs) => {
  const head = document.querySelector('head');
  const script = document.createElement('script');
  script.src = url;
  if (attrs) {
    // eslint-disable-next-line no-restricted-syntax, guard-for-in
    for (const attr in attrs) {
      script.setAttribute(attr, attrs[attr]);
    }
  }
  head.append(script);
  return script;
};

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

const gqlRateLimiter = new RateLimiter(1000);

function replacePDPLinks(links) {
  if (links === null || links.length === 0) return;
  if (!links[0].href.includes('.html')) return;

  const toUrlKey = (link) => new URL(link.href).pathname
    .replace('.html', '')
    .replace(/^\//, '');

  const keys = [...links].map(toUrlKey);

  gqlRateLimiter.execute(async () => {
    const skus = (await performMonolithGraphQLQuery(urlKeyToSkuQuery, { urlKeys: keys }))
      .data.products.items.reduce((acc, item) => ({ ...acc, [item.url_key]: item.sku }), {});

    links.forEach((link) => {
      const newUrl = new URL(window.location);
      const urlKey = toUrlKey(link);
      newUrl.pathname = skus[urlKey] ? `/products/${urlKey}/${skus[urlKey]}` : '/404';
      link.href = newUrl.toString();
    });
  });
}

export default async function loadReflektion() {
  if (reflektionLoaded) return;

  reflektionLoaded = true;

  // Load Sitecore / Reflektion
  loadScript('/scripts/jquery.min.js');
  loadScript('https://44568633-prod.rfksrv.com/rfk/js/11293-44568633/init.js');

  // Find search overlay
  const searchOverlay = new Promise((resolve) => {
    const overlay = document.getElementById('rfk_search_container');
    if (overlay) {
      resolve(overlay);
      return;
    }

    const overlayObserver = new MutationObserver(() => {
      const observedOverlay = document.getElementById('rfk_search_container');
      if (observedOverlay) {
        overlayObserver.disconnect();
        resolve(observedOverlay);
      }
    });
    overlayObserver.observe(document.body, { childList: true });
  });

  // Listen to changes in search overlay
  const searchOverlayObserver = new MutationObserver(() => {
    const observedOverlay = document.getElementById('rfk_search_container');

    // Rewrite Category links
    const categoryLinks = observedOverlay.querySelectorAll('.suggestion[data-type="category"] a, .suggestion[data-type="trending_category"] a');
    categoryLinks.forEach((link) => {
      link.href = link.href.replace('.html', '');
    });

    // Rewrite search links
    const searchLinks = observedOverlay.querySelectorAll('.suggestion[data-type="keyphrase"] a, .rfk_more a');
    searchLinks.forEach((link) => {
      const url = new URL(link.href, window.location.origin);
      const newUrl = new URL('/search', window.location.origin);
      newUrl.searchParams.set('q', url.searchParams.get('q'));
      link.href = newUrl.toString();
    });

    // Rewrite product links
    const productLinks = observedOverlay.querySelectorAll('.rfk_product a');

    replacePDPLinks(productLinks);
  });
  searchOverlayObserver.observe(await searchOverlay, { attributes: true, attributeFilter: ['class'] });
}
