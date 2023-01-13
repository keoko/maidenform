async function decorate(block) {
  block.querySelectorAll("h3").forEach((h3, index) => {
    const parent = h3.parentElement;
    const id = `footer-links-${index}`;
    const label = document.createElement("label");
    label.htmlFor = id;
    label.appendChild(h3);
    parent.prepend(label);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;
    parent.prepend(checkbox);
  });
}
export {
  decorate as default
};
