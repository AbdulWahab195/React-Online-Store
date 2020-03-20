import * as types from '../actions/action-types/actions';

const initialState = {
  salesReps: []
};

const salesRepsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SALES_REPS_SUCCESS:
      return { ...state, salesReps: action.payload };
    case types.GET_SALES_REPS_FAILURE:
      return { ...state, salesReps: action.payload }
    default:
      return state
  }
}

export { salesRepsReducer };
