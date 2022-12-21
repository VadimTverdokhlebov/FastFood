import Product from '../models/products.js';
import Additive from '../models/additive.js';

export function getMenu() {
  return Product.find().all('products', []);
}

export function getAllAdditives() {
  return Additive.find().all('additives', []);
}

export function getAdditive(id) {
  return Additive.findOne({ id });
}

export function getProduct(id) {
  return Product.findOne({ id });
}
