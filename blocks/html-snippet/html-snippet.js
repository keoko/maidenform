import { getFragmentFromFile } from '../../scripts/scripts.js';

function loadScript(parentElem, originalElem) {
  const script = document.createElement('script');
  const attributes = originalElem.getAttributeNames();

  for (let i = 0; i < attributes.length; i += 1) {
    const attribute = attributes[i];
    const value = originalElem.getAttribute(attribute);
    script.setAttribute(attribute, value);
  }

  script.setAttribute('type', 'text/javascript'); // force JS

  script.innerHTML = originalElem.innerHTML;

  document.body.appendChild(script);
}

function processScriptNodes(parent, node) {
  const isScriptNode = (node && node.tagName === 'SCRIPT');
  if (isScriptNode) {
    loadScript(parent, node);
  } else {
    const children = [...node.children];
    for (let i = 0; i < children.length; i += 1) {
      processScriptNodes(parent, children[i]);
    }
  }
  return node;
}

const getSnippetURLs = (children) => children.map((child) => {
  const u = child.children[0].textContent;
  try {
    const url = new URL(u);
    // only allow https
    if (url.protocol !== 'https:') {
      url.protocol = 'https:';
    }
    return url.href;
  } catch (e) { // fallback in case of malformed URL
    return u;
  }
});
export default async function decorate(block) {
  const children = [...block.children];
  const urls = getSnippetURLs(children);
  const fragmentURL = urls[0]; // rendering one fragment only as per current requirements
  try {
    const fragment = await getFragmentFromFile(fragmentURL);
    block.innerHTML = fragment.innerHTML;
    processScriptNodes(block, fragment);
  } catch (e) {
    block.textContent = '';
    console.warn(`cannot load snippet at ${fragmentURL}: ${e}`);
  }
}
