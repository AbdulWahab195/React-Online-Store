import * as types from '../actions/action-types/actions';

const initialState = {
  brands: []
};

const brandsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BRANDS_SUCCESS:
      return { ...state, brands: action.payload };
    case types.GET_BRANDS_FAILURE:
      return { ...state, brands: action.payload }
    default:
      return state
  }
}

export { brandsReducer };
