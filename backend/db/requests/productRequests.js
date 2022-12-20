import { Product } from '../models/products.js';
import { Additive } from '../models/additive.js';

export async function getMenu() {

    return await Product.find().all('products', []);
}

export async function getAllAdditives() {

    return await Additive.find().all('additives', []);
}

export async function getAdditive(id) {

    return await Additive.findOne({ id });
}

export async function getProduct(id) {

    return await Product.findOne({ id });
}
