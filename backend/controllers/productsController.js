import { getAdditives, getProducts } from '../db/requests/productRequests.js';

export default async function getProduct(req, res) {
  const menu = await getProducts();
  const additives = await getAdditives();

  const products = {
    menu,
    additives,
  };

  return res.json(products);
}
