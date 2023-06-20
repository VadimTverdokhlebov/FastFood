import { createStore } from '../store/observable.js';
import { changingProductsToCart } from './reducers/changingProductsToCart.js';
import { receivedDataProduct } from './reducers/receivedDataProduct.js';
import { manageModalWindow } from './reducers/manageModalWindow.js';
import { createCustomSandwich } from './reducers/createCustomSandwich.js';
import { manageMainMenu } from './reducers/manageMainMenu.js'

const storageCart = createStore(changingProductsToCart);
const storeDataProduct = createStore(receivedDataProduct);
const storageStateModal = createStore(manageModalWindow);
const storageCustomSandwich = createStore(createCustomSandwich);
const storageStateMainMenu = createStore(manageMainMenu);

export { storageCart, storeDataProduct, storageStateModal, storageCustomSandwich, storageStateMainMenu };
