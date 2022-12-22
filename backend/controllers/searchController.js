import { getProducts } from '../db/requests/productRequests.js';

export default async function getResultSearch(req, res) {
  const { searchValue } = req.body;
  const regexp = new RegExp(searchValue, 'i');
  const menu = await getProducts();
  const resaultSearch = [];

  for (const product of menu) {
    if (regexp.test(product.name)) {
      resaultSearch.push(product);
    }
  }
  return res.json({ message: 'The list of search is loaded', resaultSearch });
}
