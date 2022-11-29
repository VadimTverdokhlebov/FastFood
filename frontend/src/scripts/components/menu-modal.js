export default class MenuModal {

    #root;

    #categoriesMenu = [
        {
            id: "size",
            name: "Размер",
            description: "Выберите размер сендвича",
        },
        {
            id: "bread",
            name: "Хлеб",
            description: "Хлеб для сендвича на выбор",
        },
        {
            id: "vegetable",
            name: "Овощи",
            description: "Дополнительные овощи бесплатно",
        },
        {
            id: "sauce",
            name: "Соусы",
            description: "Выберите 3 бесплатных соуса по вкусу",
        },
        {
            id: "filling",
            name: "Начинка",
            description: "Добавьте начинку по вкусу",
        },
        {
            id: "sandwichDone",
            name: "Готово",
            description: "Проверьте и добавьте в корзину",
        },
    ];

    #state = {
        selectedCategory: 'size',
        description: 'Выберите размер сендвича',

    }

    constructor(root) {
        this.#root = root;
        this.render();

    }

    render() {

        let html = /*html*/`
            <div class="modalTop">
            <p class="descriptionCategoryMenuModal">${this.#state.description}</p>
                </div>
                <div id="navMenuModal">
                <ul id="menuModal">`;

        for (let key of this.#categoriesMenu) {
            if (this.#state.selectedCategory === key.id) {
                html += `<li  class="categoryMenuModal selectedCategoryMenuModal" id="${key.id}">
                            <p class="textMenuModal">${key.name}</p>
                        </li>`;
            } else {
                html += `<li  class="categoryMenuModal" id="${key.id}">
                            <p class="textMenuModal">${key.name}</p>
                        </li>`;
            }
        }

        html += `</ul>
                <div class="navModalButtons">`;

        if (this.#state.selectedCategory != 'size') {

            html += '<button id="backButton"> < < Назад</button>';

        }

        if (this.#state.selectedCategory != 'sandwichDone') {
            
            html += '<button class="display: none" id="forwardButton">Вперед > > </button>';
        }

        html += `</div>
            </div>`;

        this.#root.innerHTML = html;
        this.buttonsCategoryAddEventListener();
        this.categoryAddEventListener();
    }

    categoryAddEventListener() {
        let categoriesMenu = document.querySelectorAll('.categoryMenuModal');

        for (let category of categoriesMenu) {

            category.addEventListener('click', () => {

                if (category.id != this.#state.selectedCategory) {
                    for (let key of this.#categoriesMenu) {
                        if (key.id == category.id) {

                            this.setState(key.id, key.description);
                        }
                    }
                }
            })
        }
    }

    buttonsCategoryAddEventListener() {
        if (this.#state.selectedCategory != 'size') {
            this.#root.querySelector('#backButton')
                .addEventListener("click", () => this.increment());
        }

        if (this.#state.selectedCategory != 'sandwichDone') {
            this.#root.querySelector('#forwardButton')
                .addEventListener("click", () => this.decrement());
        }
    }

    setState(categoryId, description) {
        this.state = {
            ...this.#state,
            selectedCategory: categoryId,
            description: description,
        };
    }

    increment() {
        const index = this.#categoriesMenu.findIndex(category => category.id == this.#state.selectedCategory);
        console.log(index);
    }

    decrement() {
        console.log("decrement");
    }

    set state(newState) {
        this.#state = newState;
        this.render();
        // pubSub.publish("changeModalCategory", this.#state.selectedCategory);
    }
}
