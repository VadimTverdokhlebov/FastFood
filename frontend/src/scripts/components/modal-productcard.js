import { storageStateModal } from '../store/store.js';


export default class ModalProductCard {

    #additive;
    #root;

    constructor(additive, root) {
        this.#additive = additive;
        this.#root = root;

        this.innerDiv = document.createElement('div');
        this.innerDiv.id = `#innerDiv${this.#additive.id}`;

        this.#root.prepend(this.innerDiv);

        this.stateModal = storageStateModal.getState();
        this.render();
    }

    render() {

        let html = /*html*/`
            <div class="modalProductCard" style="background-color: rgb(46 155 19 / 85%);">
                <div class="modalProductImage">
                    <img src="http://localhost:3000/${this.#additive.image}">
                </div>               
                <p>${this.#additive.name}</p>
                <p>Цена: ${this.#additive.price} руб.</p>
            </div>`;

        this.innerDiv.innerHTML = html;

        this.innerDiv.addEventListener('click', () => {
            console.log(this.#additive.id);
        })
    }
}

