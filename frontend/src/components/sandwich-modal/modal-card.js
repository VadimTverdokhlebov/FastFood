import config from '../../config.js';
import { storageStateModal, storageCustomSandwich } from '../../store/store.js';
import addAdditives from '../../store/actionCreators/addAdditivesSandwich.js';

export default class ModalCard extends HTMLElement {
  constructor() {
    super();

    this.image = this.getAttribute('image');
    this.name = this.getAttribute('name');
    this.price = this.getAttribute('price');
    this.id = this.getAttribute('id');
    this.category = this.getAttribute('category');

    this.stateModal = storageStateModal.getState();
    this.render();
  }

  render() {
    let selectedAditive = '';

    if (this.checkAdditivesSandwich()) {
      selectedAditive = 'style="background-color: rgb(46 155 19 / 85%);"';
    }

    const html = /* html */`
            <div class="modalProductCard" ${selectedAditive}>
                <div class="modalProductImage">
                    <img src="http://${config.host}:${config.port}/${this.image}">
                </div>               
                <p>${this.name}</p>
                <p>Цена: ${this.price} руб.</p>
            </div>`;

    this.innerHTML = html;
    this.checkAdditivesSandwich();

    this.addEventListener('click', () => {
      storageCustomSandwich.dispatch(addAdditives(this.id, this.category));
    });
  }

  checkAdditivesSandwich() {
    const additivesCustomSandwich = storageCustomSandwich.getState().additives;
    for (const additive of additivesCustomSandwich) {
      if (additive._id === this.id) {
        return true;
      }
    }
    return false;
  }
}

customElements.define('modal-card', ModalCard);
