export const enrichmentQuery = `
query EnrichmentQuery($sku: String!, $variantIds: [String!]!) {
  refineProduct(
    sku: $sku,
    optionIds: $variantIds
  ) {
    images(roles: []) {
      url
      roles
      label
    }
    addToCartAllowed
  }
}
`;

export const productQuery = `
query ProductQuery($sku: String!) {
  products(skus:[$sku]) {
    __typename
    id
    sku
    name
    description
    shortDescription
    url
    images(roles: []) {
      url
      label
      roles
    }
    attributes(roles: []) {
      name
      label
      value
      roles
    }
  ... on SimpleProductView {
      price {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
      }
    }
  ... on ComplexProductView {
      options {
        id
        title
        required
        values {
          id
          title
  
        }
      }
      priceRange {
        maximum {
          final {
            amount {
              value
              currency
            }
          }
          regular {
            amount {
              value
              currency
            }
          }
        }
        minimum {
          final {
            amount {
              value
              currency
            }
          }
          regular {
            amount {
              value
              currency
            }
          }
        }
      }
    }
  }
}
`;

export async function performGraphqlQuery(query, variables) {
  const headers = {
    'Content-Type': 'application/json',
    'Magento-Environment-Id': '271c8746-f2ed-43c3-8159-e7b7bbe79aac',
    'Magento-Website-Code': 'maidenform',
    'Magento-Store-View-Code': 'maidenform_store_view',
    'Magento-Store-Code': 'maidenform_store',
    'Magento-Customer-Group': '77de68daecd823babbb58edb1c8e14d7106e83bb',
    'x-api-key': '070cb248e40b4f20b72836d1cd1dbbaf',
  };

  const response = await fetch('https://catalog-service-sandbox.adobe.io/graphql', {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    return null;
  }

  const productData = await response.json();

  return productData.data;
}
