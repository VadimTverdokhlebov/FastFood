import { PRODUCT_RECEIVED } from '../actions/action.js';

const initState = {
    productData: {}
}

export function receivedDataProduct(state = initState.productData, action) {
    switch (action.type) {
        case PRODUCT_RECEIVED:
            return {
                productData: action.productData
            };


        default: return state;
    }
}