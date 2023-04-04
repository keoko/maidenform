import { loadScript } from '../../scripts/scripts.js';

export default async function decorate(block) {
  block.textContent = '';
  document.body.appendChild(document.createRange().createContextualFragment('<div id="pwa-dialog-root"></div>'));

  // loadScript('../../scripts/pwa-dist/runtime.js');
  loadScript('../../scripts/pwa-dist/vendors.js', { crossorigin: 'anonymous' });
  loadScript('../../scripts/pwa-dist/cart.js', { crossorigin: 'anonymous' });
}
