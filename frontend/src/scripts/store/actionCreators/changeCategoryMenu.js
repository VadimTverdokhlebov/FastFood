import { CHANGE_CATEGORY_MAIN_MENU } from '../constants/actionTypes.js';
import { storageStateMainMenu } from '../store.js';

export default function changeCategoryMenu(categoryId) {
  const { categoriesMenu } = storageStateMainMenu.getState();
  const selectCategory = categoriesMenu.find((category) => categoryId === category.id);

  return {
    type: CHANGE_CATEGORY_MAIN_MENU,
    selectCategory: selectCategory.id,
  };
}
