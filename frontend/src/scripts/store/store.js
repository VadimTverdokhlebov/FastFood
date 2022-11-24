import { createStore } from 'redux';
import { addProductToBasket } from './reducers/addProductToBasket.js';
import {receivedDataProduct} from './reducers/receivedDataProduct.js';

const store = createStore(addProductToBasket);
const storeDataProduct = createStore(receivedDataProduct);

export { store, storeDataProduct };
