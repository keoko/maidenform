// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './lib-franklin.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
const loadScript = (url, callback, type) => {
  const head = document.querySelector('head');
  const script = document.createElement('script');
  script.src = url;
  if (type) {
    script.setAttribute('type', type);
  }
  head.append(script);
  script.onload = callback;
  return script;
};

// load Bazaarvoice Curalate 
if (document.querySelector('[data-crl8-container-id]')) {
  const crl8SiteName = 'maidenform-py0jjh';
  const crl8StaticScript = '//apps.bazaarvoice.com/deployments/hanes-maidenform/main_site/production/en_US/bv.js';

  /* start of reverse engineered minified original JS */
  const crl8Instances = [];
  const crl8 = window.crl8 || {};
  let initialized = false;
  // eslint-disable-next-line func-names
  crl8.ready = function (instance) {
    // eslint-disable-next-line no-unused-expressions
    initialized ? instance() : crl8Instances.push(instance);
  };
  // eslint-disable-next-line func-names
  crl8.pixel = function () {
    // eslint-disable-next-line prefer-rest-params
    crl8.pixel.q.push(arguments);
  };
  crl8.pixel.q = crl8.pixel.q || [];

  const crl8DebugParam
    = window.document.location.search.indexOf('crl8-debug=true') !== -1
      ? 'js'
      : 'min.js';
  const crl8ScriptExtension = crl8.debug || crl8DebugParam;
  const crl8DynamicScript = `${window.document.location.protocol}//edge.curalate.com/sites/${crl8SiteName}/site/latest/site.${crl8ScriptExtension}`;

  // eslint-disable-next-line no-inner-declarations
  function crl8Callback() {
    initialized = true;
    crl8Instances.forEach((instance) => instance());
  }
  /* end of reverse engineered minified original JS */

  loadScript(crl8DynamicScript, crl8Callback);
  loadScript(crl8StaticScript);
}
