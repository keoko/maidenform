async function decorate(block) {
  const list = block.querySelector("ul");
  list.querySelectorAll("li").forEach((li) => {
    const image = li.querySelector("picture");
    li.querySelector("br").remove();
    const a = li.querySelector("a");
    if (image && a) {
      a.prepend(image, document.createElement("br"));
    }
  });
}
export {
  decorate as default
};
