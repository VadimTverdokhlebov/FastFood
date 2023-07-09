import { CHANGE_CATEGORY_MODAL } from '../constants/actionTypes.js';
import { storageStateModal } from '../store.js';

export default function changeCategoryModal(categoryId) {
  const { categoriesMenu } = storageStateModal.getState();
  const selectCategory = categoriesMenu.find((category) => categoryId === category.id);
  const { description } = selectCategory;

  return {
    type: CHANGE_CATEGORY_MODAL,
    selectCategory: selectCategory.id,
    description,
  };
}
