import {
    Component, Fragment, h, render,
  } from '../../scripts/preact.js';
  import htm from '../../scripts/htm.js';
import { Checkout } from "../../scripts/commerce-checkout/containers/Checkout.js";
import { renderer } from "../../scripts/commerce-checkout/renderer.js";
import { setSelectedStore } from '../../scripts/commerce-checkout/api.js';

const html = htm.bind(h);

export default async function decorate(block) {
    block.innerHTML = '<div class="full-height"></div>';

    const render = renderer({
        endpoint: 'https://franklin.maidenform.com/graphql',
      });

      setSelectedStore('maidenform_store_view')


    const checkout = document.createElement("div")
  
    render(Checkout)(checkout);

    block.append(checkout);
}