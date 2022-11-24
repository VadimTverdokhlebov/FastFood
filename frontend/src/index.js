import './style/main.css';
import './index.html';
import './scripts/components/button-product.js';
import './scripts/components/product-basket.js';
import './scripts/components/product-card.js';
import './scripts/components/main-menu.js';
import './scripts/api/getDataProduct.js';
import ProductCard from './scripts/components/product-card.js';
import './scripts/api/getDataProduct.js';
import pubSub from './scripts/PubSub.js';
import { store, storeDataProduct } from './scripts/store/store.js';
import { productReceived } from './scripts/store/actionCreators/productReceived.js';
import { getDataProduct } from './scripts/api/getDataProduct.js';

main();

function main() {

    uploadDataProductToStore();

    pubSub.subscribe("changeCategory", category => {
        const menu = storeDataProduct.getState().productData.menu;
        showProductCards(menu, category);
    });

    storeDataProduct.subscribe(() => {
        const defaultCategory = 'sandwiches';
        const menu = storeDataProduct.getState().productData.menu;
        showProductCards(menu, defaultCategory);
    });

}

function showProductCards(menu, categoryId) {

    content.remove();

    const div = document.createElement('div');
    div.id = "content";
    sidebar.after(div);

    const root = content;

    for (let elementMenu of menu) {
        if (elementMenu.category === categoryId) {
            elementMenu.quantity = 1;
            new ProductCard(root, elementMenu);
        }
    }
}

async function uploadDataProductToStore(){
    const dataProduct = await getDataProduct();
    
    storeDataProduct.dispatch(productReceived(dataProduct));
}