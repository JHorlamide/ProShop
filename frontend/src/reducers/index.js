import { combineReducers } from 'redux';

// Reducers
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import { alertReducer } from './alertReducer';
import {
  userRegisterReducer,
  userLoginReducer,
  getAuthUserReducer,
} from './userReducer';

export default combineReducers({
  productList: productReducer,
  alert: alertReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userLoaded: getAuthUserReducer,
});
