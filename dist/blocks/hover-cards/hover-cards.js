import { createOptimizedPicture } from "../scripts/lib-franklin.js";
function decorate(block) {
  const cols = [...block.firstElementChild.children];
  cols.forEach((col) => {
    const imgContainer = document.createElement("div");
    const contentContainer = document.createElement("div");
    imgContainer.appendChild(col.querySelector("picture"));
    imgContainer.querySelectorAll("img").forEach((img) => img.closest("picture").replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: "500" }])));
    const h3 = col.querySelector("h3");
    contentContainer.append(...col.children);
    contentContainer.querySelectorAll("p").forEach((p) => {
      if (p.innerHTML.trim() === "") {
        p.remove();
      }
    });
    col.append(imgContainer, contentContainer, h3);
  });
}
export {
  decorate as default
};
