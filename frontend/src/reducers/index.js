import { combineReducers } from 'redux';

// Reducers
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { alertReducer } from './alertReducer';
import { orderCreateReducer } from './orderReducer';
import {
  userRegisterReducer,
  userLoginReducer,
  logoutUserReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
} from './userReducer';

export default combineReducers({
  productList: productReducer,
  alert: alertReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userLogout: logoutUserReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
});
