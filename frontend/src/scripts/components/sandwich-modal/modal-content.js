import { storageStateModal, storeDataProduct, storageCustomSandwich } from '../../store/store.js';
import './modal-card.js';
import './modal-order.js';

export default class ModalContent extends HTMLElement {
  constructor() {
    super();
    this.id = 'productContainer';
    this.stateModal = storageStateModal.getState();
    this.additives = storeDataProduct.getState().additives;
    this.render();

    storageCustomSandwich.subscribe(() => {
      this.activity = storageStateModal.getState().activity;
      if (this.activity) {
        this.render();
      }
    });
  }

  render() {
    let html = '';
    if (this.stateModal.selectCategory !== 'sandwichDone') {
      html = /* html */'<div id="productContainer"></div>';

      for (const additive of this.additives) {
        if (this.stateModal.selectCategory === additive.category) {
          html += `<modal-card 
            image="${additive.image}" 
            name="${additive.name}" 
            id=${additive._id} 
            price="${additive.price}" 
            description="${additive.description}" 
            category="${additive.category}">
          </modal-card>`;
        }
      }
    } else {
      html = /* html */`
                <div id="productContainer">
                    <modal-order></modal-order>
                </div>`;
    }

    this.innerHTML = html;
  }
}

customElements.define('modal-content', ModalContent);
