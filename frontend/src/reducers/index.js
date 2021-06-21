import { combineReducers } from 'redux';

// Reducers
import productReducer from './productReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  productList: productReducer,
  cart: cartReducer,
});
