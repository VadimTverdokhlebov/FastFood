import { getAdditives, getMenu } from "../db/requests/productRequests.js";

export async function getProduct(req, res) {


    const menu = await getMenu();
    const additives = await getAdditives();

    const products = {
        menu: menu,
        additives: additives
    }

    return res.json(products);
}