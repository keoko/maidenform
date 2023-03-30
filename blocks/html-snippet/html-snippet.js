import { getFragmentFromFile } from '../../scripts/scripts.js';
import '../../scripts/dayjs.min.js';

const { dayjs } = window;

const parseDates = (rawDates) => {
  let {
    from,
    to,
  } = { ...rawDates };

  if (from) {
    from = dayjs(from);
    if (!from.isValid()) {
      throw new Error('dateFrom is not valid');
    }
  }

  if (to) {
    to = dayjs(to);
    if (!to.isValid()) {
      throw new Error('dateTo is not valid');
    }
  }

  if (from && to && (to.isBefore(from) || to.isSame(from))) {
    throw new Error('dateFrom must be before (and different from) dateTo');
  }

  return {
    from,
    to,
  };
};

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

const checkRawDate = (rawDate) => ((rawDate === 'inf' || rawDate === '0' || rawDate === 'infinity' || rawDate === '') ? undefined : rawDate);

const getSnippetParams = (children) => {
  const dateRange = children[children.length - 1].textContent
    .toLowerCase()
    .split('-')
    .map((d) => d.trim());

  const [dateFrom, dateTo] = dateRange;

  return {
    urls: (children.length > 1 ? children.slice(0, -1) : children).map((child) => {
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
    }),
    rawDates: children.length > 1
    && children[children.length - 1] ? {
        from: checkRawDate(dateFrom),
        to: checkRawDate(dateTo),
      } : undefined,
    scheduled: !!(dateFrom || dateTo),
  };
};

async function decorateSnippet(block, fragmentURL) {
  const fragment = await getFragmentFromFile(fragmentURL);
  block.innerHTML = fragment.innerHTML;
  processScriptNodes(block, fragment);
}

function isSnippetScheduledNow(interval) {
  const now = dayjs();

  return (!interval.from || (now.isSame(interval.from) || now.isAfter(interval.from)))
    && (!interval.to || ((now.isSame(interval.to) || now.isBefore(interval.to))));
}

export default async function decorate(block) {
  const children = [...block.children];

  const {
    urls,
    rawDates,
    scheduled,
  } = getSnippetParams(children);
  const url = urls[0];// rendering one fragment only as per current requirements

  try {
    const interval = parseDates(rawDates);

    if (!scheduled || isSnippetScheduledNow(interval)) {
      await decorateSnippet(block, url, interval);
      return;
    }
  } catch (e) {
    block.textContent = '';
    console.warn(`cannot load snippet at ${url}: ${e}`);
  }
  block.textContent = '';
}
