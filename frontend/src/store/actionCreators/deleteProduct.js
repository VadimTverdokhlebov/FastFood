import { DELETE_PRODUCT } from '../constants/actionTypes.js';
import { storageCart } from '../store.js';

export default function deleteProduct(productId) {
  const cart = storageCart.getState();
  const currentProduct = Object.assign([], cart);

  const index = currentProduct.findIndex((product) => product.id === productId);

  currentProduct.splice(index, 1);

  return {
    type: DELETE_PRODUCT,
    product: currentProduct,
  };
}
