import * as types from '../actions/action-types/actions';

const initialState = {
  videos: []
};

const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VIDEOS_SUCCESS:
      return { ...state, videos: action.payload };
    case types.GET_VIDEOS_FAILURE:
      return { ...state, videos: action.payload }
    default:
      return state
  }
}

export { videosReducer };
