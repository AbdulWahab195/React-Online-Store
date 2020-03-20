import { api } from '../../service/api';
import * as types from './action-types/actions';

export const getCategories = () => {
  let options = { url: 'channels/categories/' };
  options.types = [
    types.CATEGORIES_GET_SUCCESS,
    types.CATEGORIES_GET_FAILURE
  ]

  return api.get(options);
}