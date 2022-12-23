import { getFoundProducts } from '../db/requests/productRequests.js';

export default async function getResultSearch(req, res) {
  const { searchValue, category } = req.query;
  const regexp = new RegExp(searchValue, 'i');
  const menu = await getFoundProducts(regexp, category);

  return res.json({ message: 'The list of search is loaded', menu });
}
