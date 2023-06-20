import { PRODUCT_ADD, PRODUCT_SET_QUANTITY } from '../constants/actionTypes.js';
import { storageCart, storeDataProduct } from '../store.js';

export function addProduct(productId, quantity) {

    const cart = storageCart.getState();
    const menu = storeDataProduct.getState().menu;

    const productBase = menu.find(product => product._id == productId)
    const currentQuantity = getCurrentQuantityProduct(productId, cart);
    
    const product = {
        id: productBase._id, 
        price: productBase.price, 
        name: productBase.name
    };

    product.quantity = (currentQuantity != false) ? quantity + currentQuantity : quantity;

    if (currentQuantity != false) {

        return {
            type: PRODUCT_SET_QUANTITY,
            product
        };
    }

    return {
        type: PRODUCT_ADD,
        product
    };
}

function getCurrentQuantityProduct(productId, cart) {
    for (let product of cart) {
        if (productId == product.id) {
            return product.quantity;
        }
    }
    return false;
}
