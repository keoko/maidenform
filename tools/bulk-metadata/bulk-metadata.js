import XLSX from 'xlsx';
import fs from 'fs';
import getAllProducts from './queries/products.graphql.js';

const endpoint = 'https://www.marbec.click/graphql-maidenform'; // Custom proxy with CORS support

const prodMetadata = [];
const createSheet = async () => {
  const data = [
    ['path', 'meta_keyword', 'meta_title', 'meta_description'],
  ];
  prodMetadata.forEach((metaData) => {
    data.push(
      [metaData.path, metaData.meta_keyword,
        metaData.meta_title,
        metaData.meta_description],
    );
  });
  // Write XLSX file
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = { Sheets: { Sheet1: worksheet }, SheetNames: ['Sheet1'] };
  const xlsx = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
  await fs.promises.writeFile('metadata.xlsx', xlsx);
};

/**
 * Get products by page number
 * @param {INT} pageNumber - pass the pagenumber to retrieved paginated results
 */
const getProducts = async (pageNumber) => {
  const response = await fetch(
    endpoint,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'cache-control': 'no-cache',
        store: 'maidenform_store_view', // maiden form specific
      },
      body: JSON.stringify({
        query: getAllProducts,
        variables: {
          currentPage: pageNumber,
        },
      }),
    },
  );
  const result = await response.json();

  if (result && result.data) {
    // push the metadata to an array
    result.data.products.items.forEach((item) => {
      if (item.meta_keyword || item.meta_title || item.meta_description) {
        const itemMeta = {
          path: `/products/${item.url_key}`,
          meta_keyword: (item.meta_keyword !== null) ? item.meta_keyword : '',
          meta_title: (item.meta_title !== null) ? item.meta_title : '',
          meta_description: (item.meta_description !== null) ? item.meta_description : '',
        };
        prodMetadata.push(itemMeta);
      }
    });
    const totalPages = result.data.products.page_info.total_pages;
    const currentPage = result.data.products.page_info.current_page;
    if (currentPage !== totalPages) {
      getProducts(currentPage + 1);
    } else {
      createSheet();
    }
  }
};
getProducts();
