import { combineReducers } from 'redux';
import { cartReducer } from './cartReducer';
import { categoryReducer } from './categoryReducer';
import { productReducer } from './productReducer';
import { catalogsReducer } from './catalogsReducer';
import { newsReducer } from './newsReducer';
import { brandsReducer } from './brandsReducer';
import { literaturesReducer } from './literaturesReducer';
import { videosReducer } from './videosReducer';
import { miscReducer } from './miscReducer';
import { locationReducer } from './locationReducer';
import { salesRepsReducer } from './salesRepReducer';

export default combineReducers({
  cartReducer,
  categoryReducer,
  productReducer,
  miscReducer,
  literaturesReducer,
  videosReducer,
  catalogsReducer,
  locationReducer,
  brandsReducer,
  newsReducer,
  catalogsReducer,
  salesRepsReducer
});
