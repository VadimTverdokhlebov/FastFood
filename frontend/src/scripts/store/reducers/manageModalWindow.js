import { CHANGE_CATEGORY_MODAL, SHOW_MODAL, REMOVE_MODAL } from '../constants/actionTypes.js';

const initialState = {
    categoriesMenu: [
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
    ],
    selectCategory: 'size',
    description: 'Выберите размер сендвича',
    activity: false,
};

export function manageModalWindow(state = initialState, action) {
    switch (action.type) {
        case SHOW_MODAL:

            return Object.assign({}, state,
                { activity: action.activity });


        case CHANGE_CATEGORY_MODAL:

            return Object.assign({}, state,
                { selectCategory: action.selectCategory },
                { description: action.description });

        case REMOVE_MODAL:

            return initialState;
            
        default: return state;
    }
}

