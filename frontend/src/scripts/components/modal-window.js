import "./modal-menu.js";
import "./modal-button.js";
import "./modal-description.js";
import "./modal-products.js";

import { storageStateModal } from '../store/store.js';
import { activityModal } from '../store/actionCreators/activityModal.js';

export default class ModalWindow extends HTMLElement {

    constructor() {
        super();
        this.subscribeChangeActivityModal();
    }

    render() {

        let html = /*html*/`
            <div id="modalContainer">                
                <div class="modalTop">
                    <button class="closeButtonModal">
                        <img src="http://localhost:3000/images/vcsconflicting_93497.png" class="buttonRemoveModal"/>
                    </button>                            
                    <modal-description></modal-description>
                </div>

                <modal-menu id="menuModal"></modal-menu>
                <modal-button id="modalButtons"></modal-button> 
                <modal-products id="productContainer"></modal-products>

            </div>`;

        this.innerHTML = html;
        this.removeModalAddEventListener();
    }

    subscribeChangeActivityModal() {
        storageStateModal.subscribe(() => {
            this.activity = storageStateModal.getState().activity;

            if (this.activity) {
                this.render();
            }

            if (!this.activity) {
                modalContainer.remove();
            }
        });
    }

    removeModalAddEventListener() {
        this.querySelector(`.closeButtonModal`)
            .addEventListener('click', () => {
                storageStateModal.dispatch(activityModal(false));
            })
    }
}

customElements.define("modal-window", ModalWindow);
