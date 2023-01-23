import { readBlockConfig } from '../../scripts/lib-franklin.js';
import loadReflektion from '../../scripts/reflektion.js';

export default async function decorate(block) {
  const config = readBlockConfig(block);

  block.textContent = '';

  if (config.rfkid) {
    const content = document.createRange().createContextualFragment(`<div data-rfkid="${config.rfkid}"></div>`);
    block.appendChild(content);

    // Load reflektion library when block in view
    const inViewObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadReflektion();
          inViewObserver.disconnect();
        }
      });
    });
    inViewObserver.observe(block);

    // Rewrite product links
    const observer = new MutationObserver(() => {
      block.querySelectorAll('a').forEach((link) => {
        try {
          const url = new URL(link);
          link.href = `/products${url.pathname.replace('.html', '')}`;
        // eslint-disable-next-line no-empty
        } catch {}
      });
    });
    observer.observe(block, { subtree: true, childList: true });
  }
}
