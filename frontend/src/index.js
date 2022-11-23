import './index.html';
import './style/main.css';
import './scripts/components/button-product.js';
import './scripts/components/main-menu.js';
import './scripts/components/product-basket.js';
import './scripts/components/product-card.js'
import './scripts/api/getjson.js';
import pubSub from './scripts/PubSub.js';
import { mainJson } from './scripts/storage/store.js';
import ProductCard from './scripts/components/product-card.js';

main();

function main() {

    pubSub.subscribe("getJson", menu => {
        const defaultCategory = 'sandwiches';
        showProductCards(menu, defaultCategory);
    });

    pubSub.subscribe("addProductToBasket", data => {
        console.log(data);
    });

    pubSub.subscribe("changeCategory", category => {
        showProductCards(mainJson.menu, category);
    });
}

function showProductCards(menu, categoryId) {
    const root = content;
    for (let elementMenu of menu) {
        if (elementMenu.category === categoryId) {
            elementMenu.quantity = 1;
            new ProductCard(root, elementMenu);
        }
    }
}


