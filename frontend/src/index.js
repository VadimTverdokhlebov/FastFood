import './index.css';
import './index.html';
import './scripts/components/sandwich-modal/modal-window/modal-window.js';
import './scripts/components/product-cart/product-cart.js';
import './scripts/components/main-menu/main-menu.js';
import './scripts/components/current-products/current-products.js';
import productReceived from './scripts/store/actionCreators/productReceived.js';
import { storeDataProduct } from './scripts/store/store.js';
import getDataProduct from './scripts/api/getDataProduct.js';

async function uploadDataProductToStore() {
  const dataProduct = await getDataProduct();

  storeDataProduct.dispatch(productReceived(dataProduct));
}

uploadDataProductToStore();
