import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./User/user-reducer";
import productsReducer from "./Products/products-reducer";
import cartReducer from "./Cart/cart-reducer";
import ordersReducer from './Orders/orders-reducers';

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
  ordersData: ordersReducer
});


const configStorage = {
  key: 'root',
  storage,
  whitelist: ['cartData'], // add white list: ['cartData', 'user'] to prevent losing user when reloading the page
};

export default persistReducer(configStorage, rootReducer);
