import * as types from '../actions/action-types/actions';

const initialState = {
  literatures: []
};

const literaturesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_LITRATURE_SUCCESS:
      return { ...state, literatures: action.payload };
    case types.GET_LITRATURE_FAILURE:
      return { ...state, literatures: action.payload }
    default:
      return state
  }
}

export { literaturesReducer };
