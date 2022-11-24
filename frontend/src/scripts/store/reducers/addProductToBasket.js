import { PRODUCT_ADD } from '../actions/action.js';

const initState = {
    items: []
}

export function addProductToBasket(state = initState.items, action) {
    switch (action.type) {
        case PRODUCT_ADD:
            return {
                items: [{
                    id: action.id.id,
                    quantity: action.quantity.quantity
                }]
            };


        default: return state;
    }
}