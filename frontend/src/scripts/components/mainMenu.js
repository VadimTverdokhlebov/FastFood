import { storageStateMainMenu } from '../store/store.js';
import { changeCategoryMenu } from '../store/actionCreators/changeCategoryMenu.js';

export default class MainMenu extends HTMLElement {

    constructor() {
        super();
        this.render();
        this.subscribeChangeCategoryMainMenu();
    }

    render() {

        const stateMainMenu = storageStateMainMenu.getState();
        let html = '<ul class="mainMenu">';

        for (let category of stateMainMenu.categoriesMenu) {
            if (stateMainMenu.selectCategory === category.id) {
                html += `<li class="categoryMenu activeElementMenu" id="${category.id}">${category.name}</li>`;
            } else {
                html += `<li class="categoryMenu" id="${category.id}">${category.name}</li>`;
            }
        }

        html += '</ul>';
        this.innerHTML = html;
        this.categoryAddEventListener();

    }

    categoryAddEventListener() {
        let categoriesMenu = this.querySelectorAll('.categoryMenu');
        
        for (let category of categoriesMenu) {

            category.addEventListener('click', () => {
                const stateMainMenu = storageStateMainMenu.getState();
                if (category.id != stateMainMenu.selectCategory) {

                    for (let key of stateMainMenu.categoriesMenu) {
                        if (key.id == category.id) {
                            storageStateMainMenu.dispatch(changeCategoryMenu(category.id));
                        }
                    }
                }
            })
        }
    }

    subscribeChangeCategoryMainMenu() {
        storageStateMainMenu.subscribe(() => {
            this.render();
        });
    }
}

customElements.define("main-menu", MainMenu);
