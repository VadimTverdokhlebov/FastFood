import { getProducts } from '../db/requests/productRequests.js';

export default async function getResultSearch(req, res) {
  const menu = await getProducts();

  return res.json(menu);
}
