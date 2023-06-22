import { ADD_CUSTOM_SANDWICH_TO_BASKET } from '../constants/actionTypes.js';
import { storageCustomSandwich } from '../store.js';

export default function addCustomSandwichToCart() {
  const customSandwich = storageCustomSandwich.getState();
  const sandwichAdditives = customSandwich.additives;
  const summa = sandwichAdditives.reduce((sum, additive) => sum + additive.price, 0) + customSandwich.price;

  const product = {
    id: new Date().getTime(),
    price: summa,
    name: `${customSandwich.name} custom`,
    quantity: customSandwich.quantity,
  };

  return {
    type: ADD_CUSTOM_SANDWICH_TO_BASKET,
    product,
  };
}
