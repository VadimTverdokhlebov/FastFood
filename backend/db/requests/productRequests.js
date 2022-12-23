import Product from '../models/products.js';
import Additive from '../models/additive.js';

export function getProducts() {
  return Product.find().all('products', []);
}

export function getAdditives() {
  return Additive.find().all('additives', []);
}

export function getFoundProducts(regexp) {
  return Product.find({ name: regexp });
}
