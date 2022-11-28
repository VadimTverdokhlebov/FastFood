import { createStore } from 'redux';
import { addProductToBasket } from './reducers/addProductToBasket.js';
import { receivedDataProduct } from './reducers/receivedDataProduct.js';

const storageBasket = createStore(addProductToBasket);
const storeDataProduct = createStore(receivedDataProduct);

export { storageBasket, storeDataProduct };
