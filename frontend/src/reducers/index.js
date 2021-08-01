import { combineReducers } from 'redux';

// Reducers
import { productListReducer, productDeleteReducer, productCreateReducer, productUpdateReducer } from './productReducer';
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
  userProfileReducer,
  userListReducer,
  userUpdateProfileReducer,
  userDeleteReducer,
  adminUserUpdateReducer,
  userDetailsReducer,
} from './userReducer';

export default combineReducers({
  /* Products */
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,

  /* Alert */
  alert: alertReducer,

  /* Cart */
  cart: cartReducer,

  /* User */
  userLogin: userLoginReducer,
  userLogout: logoutUserReducer,
  userProfile: userProfileReducer,
  userList: userListReducer,
  userRegister: userRegisterReducer,
  userUpdateProfile: userUpdateProfileReducer,

  /* Admin Only */
  userDelete: userDeleteReducer,
  adminUserUpdate: adminUserUpdateReducer,
  userDetails: userDetailsReducer,

  /* Orders */
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userOrder: userOrderReducer,
});
