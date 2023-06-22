import { PRODUCT_ADD, PRODUCT_SET_QUANTITY } from '../constants/actionTypes.js';
import { storageCart, storeDataProduct } from '../store.js';

export default function addProduct(productId, quantity) {
  const cart = storageCart.getState();
  const { menu } = storeDataProduct.getState();

  const productBase = menu.find((product) => product._id === productId);
  const foundProduct = cart.find((product) => productId === product.id);
  const currentQuantity = foundProduct ? foundProduct.quantity : false;

  const product = {
    id: productBase._id,
    price: productBase.price,
    name: productBase.name,
  };

  product.quantity = (currentQuantity !== false) ? quantity + currentQuantity : quantity;

  if (currentQuantity !== false) {
    return {
      type: PRODUCT_SET_QUANTITY,
      product,
    };
  }

  return {
    type: PRODUCT_ADD,
    product,
  };
}
