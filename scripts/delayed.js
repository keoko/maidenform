// eslint-disable-next-line import/no-cycle
import {
  sampleRUM,
}
  from './lib-franklin.js';

import {
  calcEnvironment,
  getConfigValue,
} from './configs.js';

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

const environment = calcEnvironment();
// OneTrust Cookies Consent Notice start
const otId = await getConfigValue('onetrustid');
const onetrustscript = await getConfigValue('onetrustscript');
const isProduction = (environment === 'prod');
if (otId && onetrustscript) {
  const cookieScript = loadScript(`${onetrustscript}`);
  cookieScript.setAttribute('data-domain-script', `${otId}${isProduction ? '' : '-test'}`);
  window.OptanonWrapper = () => {};
}

// TODO (#101): Load newrelic script
// if (!isProduction) loadScript('/scripts/newrelic-stage.js');

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
