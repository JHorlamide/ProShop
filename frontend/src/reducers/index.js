import { combineReducers } from 'redux';

// Reducers
import product from './product';

export default combineReducers({ productList: product });
