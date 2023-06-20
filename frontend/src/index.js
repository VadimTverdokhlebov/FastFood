import './style/main.css';
import './index.html';
import './scripts/components/modal/modalWindow.js';
import './scripts/components/productCart.js';
import './scripts/components/mainMenu.js';
import './scripts/components/productsCurrentCategory.js';
import { productReceived } from './scripts/store/actionCreators/productReceived.js';
import { storeDataProduct } from './scripts/store/store.js';
import { getDataProduct } from './scripts/api/getDataProduct.js';

uploadDataProductToStore();

async function uploadDataProductToStore() {

    const dataProduct = await getDataProduct();

    storeDataProduct.dispatch(productReceived(dataProduct));
}