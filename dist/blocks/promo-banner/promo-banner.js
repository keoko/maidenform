import { Carousel, Modal } from "../footer-banner/footer-banner.js";
async function decorate(block) {
  const carousel = new Carousel(Array.from(block.children));
  Array.from(block.children).forEach((promotion) => {
    if (promotion.children.length < 2 || !promotion.children[1].hasChildNodes()) {
      return;
    }
    const button = document.createElement("button");
    button.innerHTML = "Details";
    button.ariaExpanded = false;
    promotion.children[0].appendChild(button);
    promotion.children[1].classList.add("modal");
    const modal = new Modal(promotion.children[1], carousel);
    button.setAttribute("aria-controls", modal.getId());
    button.addEventListener("click", (event) => {
      event.target.ariaExpanded = true;
      modal.show();
    });
    modal.setOnClose(() => {
      button.ariaExpanded = false;
    });
  });
  carousel.start();
}
export {
  decorate as default
};
