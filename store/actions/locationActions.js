import { api } from '../../service/api';
import * as types from './action-types/actions';

export const getStoreLocators = () => {
    let options = { url: 'store/' };
    options.types = [
      types.LOCATICONS_GET_SUCCESS,
      types.LOCATICONS_GET_FAILURE
    ]
    return api.get(options);
  };