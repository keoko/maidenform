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
`.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' ');

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
`.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' ');

export const stockQuery = `
query StockQuery($urlKey: String!) {
  products(
    filter: { url_key: { eq: $urlKey } }
    pageSize: 20
    currentPage: 1
  ) {
    items {
      name
      stock_status
      ... on ConfigurableProduct {
        variants {
          attributes {
            uid
            label
            code
          }

          product {
            sku
            name
            stock_status
          }
        }
      }
    }
  }
}
`.replace(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ').replace(/\s\s+/g, ' ');

export async function performMonolithGraphQLQuery(query, variables) {
  const headers = {
    'Content-Type': 'application/json',
    Store: 'maidenform_store_view',
  };

  const params = new URLSearchParams({
    query,
    variables: JSON.stringify(variables),
  });
  const response = await fetch(
    `https://www.marbec.click/graphql-maidenform?${params.toString()}`,
    { headers },
  );

  if (!response.ok) {
    return null;
  }

  const json = await response.json();

  return json.data;
}

export async function performCatalogServiceQuery(query, variables) {
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
