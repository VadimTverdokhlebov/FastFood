import '../product-panel/product-panel.js';
import { storeDataProduct, storageStateMainMenu } from '../../store/store.js';
import productReceived from '../../store/actionCreators/productReceived.js';
import getDataProduct from '../../api/getDataProduct.js';

export default class CurrentProducts extends HTMLElement {
  menu;

  constructor() {
    super();

    this.id = 'content';
    this.subscribeToUploadDataProduct();
    this.subscribeToCategoryChanges();
    this.uploadDataProductToStore();
  }

  render() {
    const categoryMenu = storageStateMainMenu.getState().selectCategory;

    let html = '';
    for (const elementMenu of this.menu) {
      if (elementMenu.category === categoryMenu) {
        html += `<product-panel 
          image="${elementMenu.image}" 
          name="${elementMenu.name}" 
          id=${elementMenu._id} 
          price="${elementMenu.price}" 
          description="${elementMenu.description}" 
          category="${elementMenu.category}">
        </product-panel>`;
      }
    }
    this.innerHTML = html;
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

  async uploadDataProductToStore() {
    const dataProduct = await getDataProduct();

    storeDataProduct.dispatch(productReceived(dataProduct));
  }
}

customElements.define('current-products', CurrentProducts);
