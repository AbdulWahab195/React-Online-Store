import * as types from '../actions/action-types/actions';

const initialState = {
  news: [],
  newsByID: {}
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_NEWS_SUCCESS:
      return { ...state, news: action.payload };
    case types.GET_NEWSBYID_SUCCESS:
      return { ...state, newsByID: action.payload }
    default:
      return state
  }
}

export { newsReducer };
