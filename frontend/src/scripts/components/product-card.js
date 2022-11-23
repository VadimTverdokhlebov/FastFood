import pubSub from '../PubSub.js';

export default class ProductCard {
    root;
    elementMenu;
    #state = {};

    constructor(root, elementMenu) {
        this.root = root;
        this.elementMenu = elementMenu;
        this.render();
    }

    render() {
        let html = /*html*/
            `<div class="product">
        <img class="foodLogo" src="http://localhost:3000/images/markets/subway_logo.png">
        
            <img class="foodPicture" src="http://localhost:3000/${this.elementMenu.image}">
        
        <div class="foodName">${this.elementMenu.name}</div>

        <div class="foodLine">
            <p class="foodStructure">${this.elementMenu.description}</p>
        </div>

        <p class="foodPrice">Цена: ${this.elementMenu.price} руб.</p>
        <p class="foodCount">КОЛИЧЕСТВО</p>

        <form class="formAddBasket" id="addBasket" method="POST">
            <div class="foodCounter">
            <button-product></button-product>
            </div>
            <input class="buttonBuy" id="buttonId${this.elementMenu.id}" type="button" value = "В КОРЗИНУ">
        </form>

    </div>`
        this.root.insertAdjacentHTML("afterbegin", html);
        this.buttonAddEventListener();
    }

    buttonAddEventListener() {
        this.root.querySelector(`#buttonId${this.elementMenu.id}`)
            .addEventListener('click', () => {
                pubSub.publish("addProductToBasket", this.elementMenu);
            })
    }

    set state(newState) {
        this.#state = newState;
        this.render();
    }
}
