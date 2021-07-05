import { combineReducers } from 'redux';

// Reducers
import { productReducer } from './productReducer';
import { cartReducer } from './cartReducer';
import { alertReducer } from './alertReducer';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  userOrderReducer,
} from './orderReducer';
import {
  userRegisterReducer,
  userLoginReducer,
  logoutUserReducer,
  userDetailsReducer,
  userListReducer,
  userUpdateProfileReducer,
  userDeleteReducer,
} from './userReducer';

export default combineReducers({
  productList: productReducer,
  alert: alertReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userLogout: logoutUserReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userOrder: userOrderReducer,
  userDelete: userDeleteReducer,
});
