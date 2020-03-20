import { api } from '../../service/api';
import * as types from './action-types/actions';

export const emptyProduct = () => dispatch => {
  return dispatch({
    type: types.GET_PRODUCT_SUCCESS,
    payload: {}
  })
}

export const getProduct = (id) => {
  let options = { url: `products/${id}` };
  options.types = [
    types.GET_PRODUCT_SUCCESS,
    types.GET_PRODUCT_FAILURE
  ]

  return api.get(options);
}

export const getByCategory = (id) => {
  let options = { url: `products/get-by-category?categoryID=${id}` };
  options.types = [
    types.GET_PRODUCTS_SUCCESS,
    types.GET_PRODUCTS_FAILURE
  ]

  return api.get(options);
}

export const searchProducts = str => {
  let options = { url: `products/search-all-product?str=${str}` };
  options.types = [
    types.GET_PRODUCTS_SUCCESS,
    types.GET_PRODUCTS_FAILURE
  ]

  return api.get(options);
}
