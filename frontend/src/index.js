import './style/main.css';
import './index.html';
import './scripts/components/modal/modalWindow.js';
import './scripts/components/productCart.js';
import './scripts/components/mainMenu.js';
import { productReceived } from './scripts/store/actionCreators/productReceived.js';
import ProductsCurrentCategory from './scripts/components/productsCurrentCategory.js';
import { storeDataProduct } from './scripts/store/store.js';
import { getDataProduct } from './scripts/api/getDataProduct.js';

main();

function main() {

    uploadDataProductToStore();

    showProductCards();

}

function showProductCards() {
    storeDataProduct.subscribe(() => {
        const defaultCategory = 'sandwiches';
        new ProductsCurrentCategory(defaultCategory);
    });
}

async function uploadDataProductToStore() {

    const dataProduct = await getDataProduct();

    storeDataProduct.dispatch(productReceived(dataProduct));
}