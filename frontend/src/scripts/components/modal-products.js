import { storageStateModal, storeDataProduct } from '../store/store.js';
import { activityModal } from '../store/actionCreators/activityModal.js';
import ModalProductCard from './modal-productcard.js';

export default class ModalProducts extends HTMLElement {

    constructor() {
        super();
        this.stateModal = storageStateModal.getState();
        this.additives = storeDataProduct.getState().additives;
        this.render();
        this.buyCustomSandwichAddEventListener();
    }

    render() {

        if (this.stateModal.selectCategory != 'sandwichDone') {
            for (let category in this.additives) {
                if (this.stateModal.selectCategory == category) {
                    for (let additive of this.additives[category]) {
                        new ModalProductCard(additive, this)
                    }
                    break;
                }
            }
        } else {
            let html = /*html*/`
                <div class="doneProductContainer">
                    <div class="customSandwichMenu">
                        <div class="customSandwichPreview">
                            <img class="foodPicture" src="http://localhost:3000/images/sandwiches/beef-club.png">
                        </div>

                        <div id="customSandwichContainer">
                            <p id="yourSandwichIsDone">Ваш сендвич готов!</p>
                            <p>Начинка: </p>
                            <p>Размер: </p>
                            <p>Хлеб: </p>
                            <p>Соус: </p>
                            <p>Овощи: </p>
                        </div>
                    </div>
                
                    <div id="orderCustomSandwich">
                        <div>Биф Клаб</div>
                        <p>Цена: 120 руб.</p>
                        <button class="buttonBuy" id="buyCustomSandwich">В КОРЗИНУ</button>
                    </div>
                </div>`;
            this.innerHTML = html;
        }
    }

    buyCustomSandwichAddEventListener() {
        if (this.stateModal.selectCategory == 'sandwichDone') {
            this.querySelector(`#buyCustomSandwich`)
                .addEventListener('click', () => {
                    storageStateModal.dispatch(activityModal(false));
                })
        }
    }
}

customElements.define("modal-products", ModalProducts);
