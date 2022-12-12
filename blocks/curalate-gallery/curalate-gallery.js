const crl8SiteName = 'maidenform-py0jjh';
const crl8StaticScript =
  '//apps.bazaarvoice.com/deployments/hanes-maidenform/main_site/production/en_US/bv.js';

const loadScript = (url, callback, async = false, type) => {
  const head = document.querySelector('head');
  const script = document.createElement('script');
  script.src = url;
  if (async) {
    script.async = true;
  }
  if (type) {
    script.setAttribute('type', type);
  }
  head.append(script);
  script.onload = callback;
  return script;
};

export default async function decorate(block) {
  const container = block.firstElementChild;
  const crl8Id = container.textContent.trim();
  container.setAttribute('data-crl8-container-id', crl8Id);
  block.firstElementChild.innerHTML = '';

  /* start of reverse engineered minified original JS */
  const crl8Instances = [];
  const crl8 = (window.crl8 = window.crl8 || {});
  let initialized = false;
  (crl8.ready = function (instance) {
    initialized ? instance() : crl8Instances.push(instance);
  }),
    (crl8.pixel =
      crl8.pixel ||
      function () {
        crl8.pixel.q.push(arguments);
      }),
    (crl8.pixel.q = crl8.pixel.q || []);

  const crl8DebugParam =
    -1 !== window.document.location.search.indexOf('crl8-debug=true')
      ? 'js'
      : 'min.js';
  const crl8ScriptExtension = crl8.debug || crl8DebugParam;
  const crl8DynamicScript =
    window.document.location.protocol +
    '//edge.curalate.com/sites/' +
    crl8SiteName +
    '/site/latest/site.' +
    crl8ScriptExtension;

  const crl8Callback = function () {
    initialized = true;
    crl8Instances.forEach((instance) => instance());
  };
  /* end of reverse engineered minified original JS */

  loadScript(crl8StaticScript, null, true);
  loadScript(crl8DynamicScript, crl8Callback, true);
}
