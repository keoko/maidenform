import { performMonolithGraphQLQuery } from '../commerce.js';

function getAuthToken() {
  const redirectToSignin = () => {
    window.location = `/customer/account/login?login_redirect=${window.location.pathname}`;
  };

  const authObject = window.localStorage.getItem('M2_VENIA_BROWSER_PERSISTENCE__signin_token');
  if (!authObject) {
    return redirectToSignin();
  }

  const { value } = JSON.parse(authObject) || {};
  if (!value) {
    return redirectToSignin();
  }
  return value.substring(1, value.length - 1);
}

const getWishlistsQuery = `
 query GetWishlists {
  customer {
    wishlists {
      id
      name
      items_count
      items_v2 {
        items {
          id
          product {
            uid
            name
            sku
          }
        }
      }
    }
  }
}
`;

const addProductToWishlistMutation = `
mutation(
  $wishlistId: ID!,
  $sku: String!
) {
  addProductsToWishlist(
    wishlistId: $wishlistId,
    wishlistItems: [
      {
        sku: $sku
        quantity: 1
      }
    ]
  ) {
    user_errors {
      code
      message
    }
    wishlist {
      name
    }
  }
}
`;

export async function getWishlists() {
  const token = getAuthToken();

  const wishlists = await performMonolithGraphQLQuery(
    getWishlistsQuery,
    {},
    true,
    { Authorization: `Bearer ${token}` },
  );

  return wishlists.data?.customer?.wishlists;
}

export async function addToWishlist(product, wishlistId) {
  const toWishlist = wishlistId ?? (await getWishlists())[0].id;
  const token = getAuthToken();

  const response = await performMonolithGraphQLQuery(
    addProductToWishlistMutation,
    {
      wishlistId: toWishlist,
      sku: product,
    },
    false,
    { Authorization: `Bearer ${token}` },
  );

  if (response.user_errors) {
    console.error(response.user_errors);
  }
}
