import { PRODUCT_RECEIVED } from '../constants/actionTypes.js';

export default function productReceived(productData) {
  return {
    type: PRODUCT_RECEIVED,
    productData,
  };
}
