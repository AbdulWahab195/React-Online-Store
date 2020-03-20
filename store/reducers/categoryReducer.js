import * as types from '../actions/action-types/actions';
import { createTree } from '../../common/createTree';

const initialState = {
  categories: [],
  categoriesTree: [],
  categoriesLvl1: []
};

const createLvl1 = (payload) => {
  const items = JSON.parse(JSON.stringify(payload));
  const copy = JSON.parse(JSON.stringify(payload));
  for(let i of items) {
    const arr = copy.filter(j => j.parentID === i.channelCategoryID);
    i.key = i.channelCategoryID;
    i.children = arr || [];
  }

  return items;
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CATEGORIES_GET_SUCCESS:
      return {
        ...state,
        categoriesTree: createTree(action.payload),
        categories: action.payload,
        categoriesLvl1: createLvl1(action.payload),
      }
    default:
      return state
  }
}

export { categoryReducer };
