import ProductCard from './productCard.js';
import { storeDataProduct, storageStateMainMenu } from '../store/store.js';

export default class ProductsCurrentCategory extends HTMLElement {
  menu;

  constructor() {
    super();
    this.subscribeToUploadDataProduct();
    this.subscribeToCategoryChanges();
  }

  render() {
    const categoryMenu = storageStateMainMenu.getState().selectCategory;

    content.remove();

    const innerDiv = document.createElement('div');

    innerDiv.id = 'content';

    this.prepend(innerDiv);

    const root = content;

    for (const elementMenu of this.menu) {
      if (elementMenu.category === categoryMenu) {
        new ProductCard(root, elementMenu);
      }
    }
  }

  subscribeToCategoryChanges() {
    storageStateMainMenu.subscribe(() => {
      this.render();
    });
  }

  subscribeToUploadDataProduct() {
    storeDataProduct.subscribe(() => {
      this.menu = storeDataProduct.getState().menu;
      this.render();
    });
  }
}

customElements.define('current-products', ProductsCurrentCategory);
