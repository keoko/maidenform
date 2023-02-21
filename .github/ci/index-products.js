const endpoint = 'https://franklin.maidenform.com/graphql';
const adminBaseEndpoint = 'https://admin.hlx.page/index/hlxsites/maidenform/main';
const store = 'maidenform_store_view';

const headers = {
  'Content-Type': 'application/json',
  store,
};

const query = `query getProducts($currentPage: Int=1){
    products(
        search: ""
        pageSize: 20
        currentPage: $currentPage
    ) {
        items {
            sku
            url_key
        }
        page_info {
            current_page
            page_size
            total_pages
        }
        total_count
    }
}`.replaceAll(/(?:\r\n|\r|\n|\t|[\s]{4})/g, ' ');

async function main() {
  let allProducts = [];
  let count = 0;
  let totalCount;
  let currentPage = 1;
  do {
    const api = new URL(endpoint);
    api.searchParams.append('query', query);
    api.searchParams.append('variables', JSON.stringify({ currentPage }));

    const response = await fetch(api, {
      method: 'GET',
      headers,
    });

    const result = await response.json()

    const {page_size: pageSize} = result.data.products.page_info;

    count = currentPage * pageSize;
    totalCount = result.data.products.total_count;

    currentPage += 1;

    allProducts = [...allProducts, ...result.data.products.items]
  } while (count < totalCount);

  const promises = allProducts.map((product) => {
    const { sku, url_key } = product;
    const url = `${adminBaseEndpoint}/products/${url_key}/${sku}`

    return fetch(url, { method: 'POST' })
  });

  await Promise.all(promises);

  console.log(`Indexed ${allProducts.length} products`);
}

main()
  .then()
  .catch((e) => console.error(e));
