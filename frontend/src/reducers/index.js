import { combineReducers } from 'redux';

// Reducers
import product from './product';
import cart from './cart';

export default combineReducers({ productList: product, cart });
