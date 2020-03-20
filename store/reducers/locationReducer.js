import * as types from '../actions/action-types/actions';

const initialState = [];

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOCATICONS_GET_SUCCESS:
      return { ...state, stores: action.payload };
    case types.LOCATICONS_GET_FAILURE:
      return { ...state, store: action.payload }
    default:
      return state
  }
}

export { locationReducer };
