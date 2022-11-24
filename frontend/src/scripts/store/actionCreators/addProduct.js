import { PRODUCT_ADD }from '../actions/action.js';

export function addProduct(id, quantity) {
    return { 
        type: PRODUCT_ADD,
        id : { id },
        quantity: { quantity },
    };
}
