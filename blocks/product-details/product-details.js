export default function decorate($block) {
  $block.innerHTML = '<div class="full-height"></div>';

  import('./ProductDetails.js').then((module) => {
    module.default($block);
  });
}
