import { loadCSS } from '../lib-franklin.js';

export default function showWishlistModal(wishlists, callback) {
  loadCSS('../../styles/wishlist-modal.css', () => {
    document.body.append(document.createRange().createContextualFragment(`
      <div class="wishlist-modal">
        <div class="wishlist-modal-content">
          ${wishlists.map((wishlist) => `
              <button data-wishlist-id="${wishlist.id}">
                ${wishlist.name}
              </button>
            `).join('')}
        </div>
      </div>
    `));
    document.querySelector('.wishlist-modal').addEventListener('click', (event) => {
      callback(event.target.getAttribute('data-wishlist-id'));
      document.querySelector('.wishlist-modal').remove();
    });
  });
}
