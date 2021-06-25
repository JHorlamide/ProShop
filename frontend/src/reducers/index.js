import { combineReducers } from 'redux';

// Reducers
import productReducer from './productReducer';
import cartReducer from './cartReducer';
import {
  userRegisterReducer,
  userLoginReducer,
  getAuthUserReducer,
} from './userReducer';

export default combineReducers({
  productList: productReducer,
  cart: cartReducer,
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userLoaded: getAuthUserReducer,
});
