import { Product } from '../models/products.js';
import { Additive } from '../models/additive.js';

export async function getMenu() {

    return await Product.find().all('products',[]);
}

export async function getAdditives() {

    return await Additive.find().all('additives',[]);
}