import * as types from '../actions/action-types/actions';

const initialState = {
  banners: [],
  sliderImages: []
};

const miscReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BANNERS_SUCCESS:
      return { ...state, banners: action.payload };
    case types.GET_SLIDER_SUCCESS:
      return { ...state, sliderImages: action.payload }
    default:
      return state
  }
}

export { miscReducer };
