import './product-panel.css';
import { storageCart, storageStateModal, storageCustomSandwich } from '../../store/store.js';
import addProduct from '../../store/actionCreators/addProductToCart.js';
import activityModal from '../../store/actionCreators/activityModal.js';
import addSelectedSandwich from '../../store/actionCreators/addSelectedSandwich.js';

export default class ProductCard extends HTMLElement {
  #state = {
    quantity: 1,
  };

  constructor() {
    super();

    this.image = this.getAttribute('image');
    this.name = this.getAttribute('name');
    this.description = this.getAttribute('description');
    this.price = this.getAttribute('price');
    this.id = this.getAttribute('id');
    this.category = this.getAttribute('category');

    this.render();
  }

  render() {
    const html = /* html */`
       <div class="product">
            <img class="foodLogo" src="http://localhost:3000/images/markets/subway.png">
        
            <img class="foodPicture" src="http://localhost:3000/${this.image}">
        
        <div class="foodName">${this.name}</div>

        <div class="foodLine">
            <p class="foodStructure">${this.description}</p>
        </div>

        <p class="foodPrice">Цена: ${this.price} руб.</p>
        <p class="foodCount">КОЛИЧЕСТВО</p>

        <form class="formAddCart" id="addCart" method="POST">
            <div class="foodCounter">

                <button id="btn2${this.id}" type="button">
                    <img alt="-" src="http://localhost:3000/templates/minus.png" class="buttonMinus"/>
                </button>
                    <input class="quantity" type="text" value="${this.#state.quantity}">
                <button id="btn1${this.id}" type="button">
                    <img alt="+" src="http://localhost:3000/templates/plus.png" class="buttonPlus"/>
                </button>
            </div>
                
                <input class="buttonBuy" id="buttonId${this.id}" type="button" value = "В КОРЗИНУ">
        </form>
        </div>`;

    this.innerHTML = html;
    this.buttonToBaskedAddEventListener();
    this.buttonsAddEventListener();
  }

  buttonToBaskedAddEventListener() {
    this.querySelector(`#buttonId${this.id}`)
      .addEventListener('click', () => {
        this.activity = storageStateModal.getState().activity;
        if (this.category === 'sandwiches' && !this.activity) {
          const { quantity } = this.#state;
          const activity = true;

          storageStateModal.dispatch(activityModal(activity));
          storageCustomSandwich.dispatch(addSelectedSandwich(this.id, quantity));
        } else if (this.category !== 'sandwiches') {
          const { quantity } = this.#state;

          storageCart.dispatch(addProduct(this.id, quantity, this.name));
        }
      });
  }

  buttonsAddEventListener() {
    this.querySelector(`#btn1${this.id}`)
      .addEventListener('click', this.increment.bind(this));

    this.querySelector(`#btn2${this.id}`)
      .addEventListener('click', this.decrement.bind(this));
  }

  increment() {
    if (this.#state.quantity < 10) {
      this.state = {
        ...this.#state,
        quantity: this.#state.quantity + 1,
      };
    }
  }

  decrement() {
    if (this.#state.quantity > 1) {
      this.state = {
        ...this.#state,
        quantity: this.#state.quantity - 1,
      };
    }
  }

  set state(newState) {
    this.#state = newState;
    this.render();
  }
}

customElements.define('product-panel', ProductCard);
