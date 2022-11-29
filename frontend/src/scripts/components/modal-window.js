import MenuModal from "./menu-modal.js";

export default class ModalWindow {

    productId;

    constructor(productId) {
        this.productId = productId;

        this.modal = document.createElement('div');
        this.modal.id = "modalWindow";

        content.after(this.modal);

        this.render();
        this.removeModalAddEventListener();
    }

    render() {
        const html = /*html*/`
        <div class="modalOverlay" id="modalOverlay"></div>
            <div class="modalContainer">
                <div id="modalContent">
                    <div class="bottonContainer">
                        <button class="closeButtonModal">
                            <img src="http://localhost:3000/images/vcsconflicting_93497.png" class="buttonRemoveModal"/>
                        </button>
                    </div>
                    
                    <div id="modalMenuContainer"><div>
                    
                    <div id="productContainer"></div>  

                </div>
            </div>`;
        this.modal.innerHTML = html;
        const rootModalMenu = modalMenuContainer;
        new MenuModal(rootModalMenu);
    }

    removeModalAddEventListener() {
        this.modal.querySelector(`.closeButtonModal`)
            .addEventListener('click', () => {
                console.log("remove");
                this.modal.remove();
            })
    }
}

{/* <div class="modalProductCard" id="#">
        <div class="foodPicture">
            <img src="#">
        </div>

        <div>$</div>

        <p>Цена:  руб.</p>

    </div> */}
