export default class ProductBasket extends HTMLElement {
    constructor() {
        super();
    }

    render() {
        this.innerHTML = /*html*/`
        <div id="basket">
        <div id="basketHead">
            <img id="basketIcon" src="http://localhost:3000/images/shoppingbasket_83998.png">
            <p id="basketName">Корзина</p>
        </div>
        <div id="basketTitle">
            <p>Названиe</p>
            <p>Количество</p>
        </div>
        <div id="basketContainer">

        </div>
        <div id="basketOrder">
            <div id="basketTotal">

            </div>

            <form>
                <input class="basketBottonOrder" type="submit" value="ОФОРМИТЬ ЗАКАЗ">
            </form>
        </div>
    </div>`;
    }

    connectedCallback() {
        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }
}

customElements.define("product-basket", ProductBasket);
