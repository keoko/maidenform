import {
    Component, Fragment, h, render,
  } from '../../scripts/preact.js';
  import htm from '../../scripts/htm.js';
import { Checkout } from "../../scripts/commerce-checkout/containers/Checkout.js";
import { renderer } from "../../scripts/commerce-checkout/renderer.js";
import { setSelectedStore } from '../../scripts/commerce-checkout/cart/api.js';

const html = htm.bind(h);

export default async function decorate(block) {
    block.innerHTML = '<div class="full-height"></div>';

    const render = renderer({
        endpoint: 'https://graph.adobe.io/api/63e62e43-8eb8-45a2-b0f6-f7c3845093db/graphql?api_key=2c6d06bb3aef463db8485c88a90f563f',
        mesh: 'storefrontstaticenvmesh',
      });

    setSelectedStore('default')

    const checkout = document.createElement("div")
  
    render(Checkout)(checkout);

    block.append(checkout);
}