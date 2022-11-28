import { createStore } from 'redux';
import { changingProductsToBasket } from './reducers/changingProductsToBasket.js';
import { receivedDataProduct } from './reducers/receivedDataProduct.js';

const storageBasket = createStore(changingProductsToBasket);
const storeDataProduct = createStore(receivedDataProduct);

export { storageBasket, storeDataProduct };
