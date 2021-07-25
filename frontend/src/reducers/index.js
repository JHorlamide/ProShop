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
  adminUserUpdateReducer,
} from './userReducer';

export default combineReducers({
  /* Products */
  productList: productReducer,

  /* Alert */
  alert: alertReducer,

  /* Cart */
  cart: cartReducer,

  /* User */
  userLogin: userLoginReducer,
  userLogout: logoutUserReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,

  /* Admin Only */
  userDelete: userDeleteReducer,
  adminUserUpdate: adminUserUpdateReducer,

  /* Orders */
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userOrder: userOrderReducer,
});
