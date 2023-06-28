import { storageCart } from '../store/store.js';
import deleteProduct from '../store/actionCreators/deleteProduct.js';

export default class ProductCart extends HTMLElement {
  constructor() {
    super();
    this.cart = storageCart.getState();
    this.render();

    storageCart.subscribe(() => {
      this.cart = storageCart.getState();
      this.render();
    });
  }

  render() {
    let sumOrder = 0;

    let html = /* html */`
            <div id="cart">
            <div id="cartHead">
                <img id="cartIcon" src="http://localhost:3000/templates/cart.png">
                <p id="cartName">Корзина</p>
            </div>
            <div id="cartTitle">
                <p>Названиe</p>
                <p>Количество</p>
            </div>
            <div id="cartContainer">`;

    for (const product of this.cart) {
      sumOrder += product.price * product.quantity;

      html += /* html */`
                <div class="cartProduct" id="positionProductInCart${product.id}">

                <button type="button"  class="buttonRemove" id="idProductInCart${product.id}">
                    <img src="http://localhost:3000/templates/closeButton.png" class="buttonDelete"/>
                </button>
                
                <p>${product.name}</p>
                
                <p>${product.quantity}</p>

            </div>`;
    }

    html += /* html */`
            </div>
                <div id="cartOrder">
                    <div id="cartTotal">
                        <p>СУММА: ${sumOrder} РУБ.</p>
                    </div>

                    <form>
                        <input class="cartBottonOrder" type="submit" value="ОФОРМИТЬ ЗАКАЗ">
                    </form>

                </div>
            </div>`;

    this.innerHTML = html;

    this.buttonDeleteProductAddEventListener();
  }

  buttonDeleteProductAddEventListener() {
    const buttons = this.querySelectorAll('.buttonRemove');

    for (const button of buttons) {
      button.addEventListener('click', () => {
        const productId = parseInt(button.id.match(/\d+/), 10);
        storageCart.dispatch(deleteProduct(productId));
      });
    }
  }
}

customElements.define('product-cart', ProductCart);
