import { api } from '../../service/api';
import * as types from './action-types/actions';

export const getAttributes = (id) => {
  let options = { url: `products/get-product-attributes-by-category?categoryID=${id}` };
  options.types = [
    types.GET_PRODUCT_ATTRIBUTES_SUCCESS,
    types.GET_PRODUCT_ATTRIBUTES_FAILURE
  ]

  return api.get(options);
}