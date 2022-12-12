export default async function decorate(block) {
  const container = block.firstElementChild;
  const crl8Id = container.textContent.trim();
  container.setAttribute('data-crl8-container-id', crl8Id);
  block.firstElementChild.innerHTML = '';
}
