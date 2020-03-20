import * as types from '../actions/action-types/actions';

const initialState = {
  parentProduct: {},
  childProduct: {},
  products: [],
  attributes: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        parentProduct: action.payload.type ? action.payload.type === 'Parent' ? action.payload : state.parentProduct : {},
        childProduct: action.payload.type ? action.payload.type === 'Child' ? action.payload : state.childProduct : {}
      };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload }
    case types.GET_PRODUCT_ATTRIBUTES_SUCCESS:
      return { ...state, attributes: action.payload.parentProducts }
    default:
      return state
  }
}

export { productReducer };
