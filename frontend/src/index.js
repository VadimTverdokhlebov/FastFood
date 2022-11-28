import './style/main.css';
import './index.html';
import './scripts/components/product-basket.js';
import './scripts/components/main-menu.js';
import { productReceived } from './scripts/store/actionCreators/productReceived.js';
import ProductsCategory from './scripts/components/products-category.js';
import { storageBasket, storeDataProduct } from './scripts/store/store.js';
import { getDataProduct } from './scripts/api/getDataProduct.js';

main();

function main() {

    uploadDataProductToStore();

    showProductCards();

    
    storageBasket.subscribe(() => {
        console.log(storageBasket.getState());
    });
    
    storeDataProduct.subscribe(() => {
        //console.log(storeDataProduct.getState());
    });
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