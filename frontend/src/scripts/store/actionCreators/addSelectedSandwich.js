import { ADD_SELECTED_SANDWICH } from '../constants/actionTypes.js';
import { storageCustomSandwich, storeDataProduct } from '../store.js';

export function addSelectedSandwich(productId, quantity) {
    const menu = storeDataProduct.getState().menu;

    const productBase = menu.find(product => product.id == productId)
    
    const product = {
        id: productBase.id, 
        price: productBase.price,
        image: productBase.image, 
        name: productBase.name,
        quantity: quantity
    };

    return {
        type: ADD_SELECTED_SANDWICH,
        product
    };
}