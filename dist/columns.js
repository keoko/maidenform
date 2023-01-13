function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  if (block.classList.contains("overlap")) {
    if (cols.length > 1) {
      cols[0].appendChild(cols[1]);
    }
  }
}
export {
  decorate as default
};
