import { getAllAdditives, getMenu } from '../db/requests/productRequests.js';

export default async function getProduct(req, res) {
  const menu = await getMenu();
  const additives = await getAllAdditives();

  const products = {
    menu,
    additives,
  };

  return res.json(products);
}
