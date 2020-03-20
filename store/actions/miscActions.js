import { api } from '../../service/api';
import * as types from './action-types/actions';

export const getBanners = () => {
  let options = { url: 'banners/' };
  options.types = [
    types.GET_BANNERS_SUCCESS,
    types.GET_BANNERS_FAILURE
  ]

  return api.get(options);
}

export const getSliderImages = () => {
  let options = { url: 'slider/' };
  options.types = [
    types.GET_SLIDER_SUCCESS,
    types.GET_SLIDER_FAILURE
  ]

  return api.get(options);
}
