import { PRODUCT_ADD, PRODUCT_SET_QUANTITY } from '../constants/actionTypes.js';
const initialState = [];

export function addProductToBasket(state = initialState, action) {
    switch (action.type) {
        case PRODUCT_ADD:

            return [
                ...state,
                action.product
            ];

        case PRODUCT_SET_QUANTITY:
            let cloneState = [];

            for (let elem of state) {
                if (elem.id != action.product.id) {
                    cloneState.push(elem);
                } else {
                    cloneState.push(action.product);
                }
            }
            return  cloneState;

        default: return state;
    }
}
