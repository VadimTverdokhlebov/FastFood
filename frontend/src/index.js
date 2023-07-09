import './index.css';
import './index.html';
import './components/sandwich-modal/modal-window/modal-window.js';
import './components/product-cart/product-cart.js';
import './components/main-menu/main-menu.js';
import './components/current-products/current-products.js';
import productReceived from './store/actionCreators/productReceived.js';
import { storeDataProduct } from './store/store.js';
import getDataProduct from './api/getDataProduct.js';

async function uploadDataProductToStore() {
  const dataProduct = await getDataProduct();

  storeDataProduct.dispatch(productReceived(dataProduct));
}

uploadDataProductToStore();
