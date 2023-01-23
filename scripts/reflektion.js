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
    productLinks.forEach((link) => {
      const url = new URL(link.href);
      const newUrl = new URL(window.location);
      newUrl.pathname = `/products${url.pathname.replace('.html', '')}`;
      link.href = newUrl.toString();
    });
  });
  searchOverlayObserver.observe(await searchOverlay, { attributes: true, attributeFilter: ['class'] });
}