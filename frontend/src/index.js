import './style/main.css';
import './index.html';
import './scripts/components/product-basket.js';
import './scripts/components/main-menu.js';
import { productReceived } from './scripts/store/actionCreators/productReceived.js';
import ProductsCategory from './scripts/components/products-category.js';
import { storeDataProduct } from './scripts/store/store.js';
import { getDataProduct } from './scripts/api/getDataProduct.js';
import pubSub from './scripts/PubSub.js';
import ModalWindow from './scripts/components/modal-window.js';

main();

function main() {

    uploadDataProductToStore();

    showProductCards();

    subscribeToShowModalWindow();
 
}

function showProductCards() {
    storeDataProduct.subscribe(() => {
        const defaultCategory = 'sandwiches';
        new ProductsCategory(defaultCategory);
    });
}

async function uploadDataProductToStore() {

    const dataProduct = await getDataProduct();

    storeDataProduct.dispatch(productReceived(dataProduct));
}

function subscribeToShowModalWindow() {
    pubSub.subscribe("showModalWindow", productId => {
        new ModalWindow(productId);
    });
}