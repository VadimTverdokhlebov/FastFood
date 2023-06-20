import { CHANGE_CATEGORY_MAIN_MENU } from '../constants/actionTypes.js';
import { storageStateMainMenu } from '../store.js';

export function changeCategoryMenu(categoryId) {

    const categoriesMenu = storageStateMainMenu.getState().categoriesMenu;
    const category = categoriesMenu.find(category => categoryId == category.id);
    const selectCategory = category.id;

    return {
        type: CHANGE_CATEGORY_MAIN_MENU,
        selectCategory,
    }
}