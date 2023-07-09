import {
  storageStateModal, storeDataProduct, storageCustomSandwich, storageCart,
} from '../../store/store.js';
import config from '../../config.js';
import activityModal from '../../store/actionCreators/activityModal.js';
import removeCustomSandwich from '../../store/actionCreators/removeCustomSandwich.js';
import addCustomSandwichToCart from '../../store/actionCreators/addCustomSandwichToCart.js';
import setQuantityCustomSandwich from '../../store/actionCreators/setQuantityCustomSandwich.js';

export default class ModalOrder extends HTMLElement {
  constructor() {
    super();
    this.stateModal = storageStateModal.getState();
    this.additives = storeDataProduct.getState().additives;
    this.customSandwich = storageCustomSandwich.getState();
    this.render();
  }

  render() {
    const { additives } = this.customSandwich;
    const additivesSum = additives.reduce((sum, additive) => sum + additive.price, 0);
    const sumOrder = this.customSandwich.quantity * (additivesSum + this.customSandwich.price);

    this.innerHTML = /* html */`
                <div class="doneProductContainer">
                    <div class="customSandwichMenu">
                        <div class="customSandwichPreview">
                            <img class="foodPicture" src="http://${config.host}:${config.port}/templates/result_sandwich.jpg">
                        </div>

                        <div id="customSandwichContainer">
                            <p id="yourSandwichIsDone">Ваш сендвич готов!</p>
                            <p>Размер: ${this.getAdditivesCategorySandwich('sizes', additives)}</p>
                            <p>Хлеб: ${this.getAdditivesCategorySandwich('breads', additives)}</p>
                            <p>Овощи: ${this.getAdditivesCategorySandwich('vegetables', additives)}</p>
                            <p>Соусы: ${this.getAdditivesCategorySandwich('sauses', additives)}</p>
                            <p>Начинка: ${this.getAdditivesCategorySandwich('fillings', additives)}</p>
                        </div>
                    </div>
                
                    <div id="orderCustomSandwich">
                        <div>${this.customSandwich.name}</div>
                        <p>Цена: ${sumOrder} руб.</p>

                        <div class="foodCounter">
                            <button id="button2${this.customSandwich.id}" type="button">
                                <img alt="-" src="http://${config.host}:${config.port}/templates/minus.png" class="buttonMinus"/>
                            </button>
                                <input class="quantity" type="text" value="${this.customSandwich.quantity}">
                            <button id="button1${this.customSandwich.id}" type="button">
                                <img alt="+" src="http://${config.host}:${config.port}/templates/plus.png" class="buttonPlus"/>
                            </button>
                        </div>

                        <button class="buttonBuy" id="buyCustomSandwich">В КОРЗИНУ</button>
                    </div>
                </div>`;

    this.buttonsAddEventListener();
    this.buyCustomSandwichAddEventListener();
  }

  buttonsAddEventListener() {
    if (this.customSandwich.quantity < 10) {
      this.querySelector(`#button1${this.customSandwich.id}`)
        .addEventListener('click', () => {
          storageCustomSandwich.dispatch(setQuantityCustomSandwich(1));
        });
    }

    if (this.customSandwich.quantity > 1) {
      this.querySelector(`#button2${this.customSandwich.id}`)
        .addEventListener('click', () => {
          storageCustomSandwich.dispatch(setQuantityCustomSandwich(-1));
        });
    }
  }

  buyCustomSandwichAddEventListener() {
    if (this.stateModal.selectCategory === 'sandwichDone') {
      this.querySelector('#buyCustomSandwich')
        .addEventListener('click', () => {
          storageStateModal.dispatch(activityModal(false));
          storageCart.dispatch(addCustomSandwichToCart());
          storageCustomSandwich.dispatch(removeCustomSandwich());
        });
    }
  }

  getAdditivesCategorySandwich(category, additives) {
    let result = '';
    for (const additive of additives) {
      if (additive.category === category) {
        result += `${additive.name}; `;
      }
    }

    if (!result) {
      return 'Нет;';
    }
    return result;
  }
}

customElements.define('modal-order', ModalOrder);
