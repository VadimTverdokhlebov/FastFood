import { PRODUCT_RECEIVED } from '../actions/action.js';

export function productReceived(productData) {
    return {
        type: PRODUCT_RECEIVED,
        productData: productData
    }
}