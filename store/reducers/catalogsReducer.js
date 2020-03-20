import * as types from '../actions/action-types/actions';

const initialState = {
  catalogs: []
};

const catalogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATALOGS_SUCCESS:
      return { ...state, catalogs: action.payload };
    case types.GET_CATALOGS_FAILURE:
      return { ...state, catalogs: action.payload }
    default:
      return state
  }
}

export { catalogsReducer };
