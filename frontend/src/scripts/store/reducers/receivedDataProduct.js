import { PRODUCT_RECEIVED } from '../constants/actionTypes.js';

const initState = {}

export function receivedDataProduct(state = initState.productData, action) {
    switch (action.type) {
        case PRODUCT_RECEIVED:

            return action.productData;

        default: return state;
    }
}