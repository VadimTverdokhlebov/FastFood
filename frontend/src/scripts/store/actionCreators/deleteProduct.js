import { DELETE_PRODUCT } from '../constants/actionTypes.js';
import { storageCart } from '../store.js';

export function deleteProduct(productId) {

    const cart = storageCart.getState();
    const product = Object.assign([], cart);
    
    const index = product.findIndex(product => product.id == productId);

    product.splice(index, 1);

    return {
        type: DELETE_PRODUCT,
        product
    };
}