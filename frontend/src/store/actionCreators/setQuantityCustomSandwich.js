import { SET_QUANTITY_CUSTOM_SANDWICH } from '../constants/actionTypes.js';
import { storageCustomSandwich } from '../store.js';

export default function setQuantityCustomSandwich(step) {
  let quantity = storageCustomSandwich.getState().quantity + step;

  if ((quantity <= 10) && (quantity > 0)) {
    return {
      type: SET_QUANTITY_CUSTOM_SANDWICH,
      quantity,
    };
  }

  quantity = storageCustomSandwich.getState().quantity;

  return {
    type: SET_QUANTITY_CUSTOM_SANDWICH,
    quantity,
  };
}
