import { getFoundProducts } from '../db/requests/productRequests.js';

export default async function getResultSearch(req, res) {
  const { searchValue } = req.query;
  const regexp = new RegExp(searchValue, 'i');
  const menu = await getFoundProducts(regexp);

  return res.json({ message: 'The list of search is loaded', menu });
}
