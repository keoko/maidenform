const crl8SiteName = "maidenform-py0jjh";
const crl8StaticScript = "//apps.bazaarvoice.com/deployments/hanes-maidenform/main_site/production/en_US/bv.js";
const loadScript = (url, callback, type) => {
  const head = document.querySelector("head");
  const script = document.createElement("script");
  script.src = url;
  if (type) {
    script.setAttribute("type", type);
  }
  head.append(script);
  script.onload = callback;
  return script;
};
async function decorate(block) {
  const container = block.firstElementChild;
  const crl8Id = container.textContent.trim();
  container.setAttribute("data-crl8-container-id", crl8Id);
  block.firstElementChild.innerHTML = "";
  const crl8Instances = [];
  const crl8 = window.crl8 || {};
  let initialized = false;
  crl8.ready = function(instance) {
    initialized ? instance() : crl8Instances.push(instance);
  };
  crl8.pixel = function() {
    crl8.pixel.q.push(arguments);
  };
  crl8.pixel.q = crl8.pixel.q || [];
  const crl8DebugParam = window.document.location.search.indexOf("crl8-debug=true") !== -1 ? "js" : "min.js";
  const crl8ScriptExtension = crl8.debug || crl8DebugParam;
  const crl8DynamicScript = `${window.document.location.protocol}//edge.curalate.com/sites/${crl8SiteName}/site/latest/site.${crl8ScriptExtension}`;
  const crl8Callback = function() {
    initialized = true;
    crl8Instances.forEach((instance) => instance());
  };
  if ("IntersectionObserver" in window) {
    const lazyCrl8Observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadScript(crl8DynamicScript, crl8Callback);
          loadScript(crl8StaticScript);
          lazyCrl8Observer.unobserve(entry.target);
        }
      });
    });
    lazyCrl8Observer.observe(container);
  }
}
export {
  decorate as default
};
