import { CHANGE_CATEGORY_MAIN_MENU } from '../constants/actionTypes.js';

const initialState = {
  categoriesMenu: [
    {
      id: 'pizza',
      name: 'Пицца',
    },
    {
      id: 'shaurma',
      name: 'Шаурма',
    },
    {
      id: 'sandwiches',
      name: 'Сендвичи',
    },
    {
      id: 'burgers',
      name: 'Бургеры',
    },
    {
      id: 'chicken',
      name: 'Курица & Картофель',
    },
    {
      id: 'salads',
      name: 'Тортилья & Салаты',
    },
    {
      id: 'drinks',
      name: 'Напитки & Десерты',
    },
  ],
  selectCategory: 'sandwiches',
};

export default function manageMainMenu(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY_MAIN_MENU:

      return {
        ...state,
        selectCategory: action.selectCategory,
      };

    default: return state;
  }
}
