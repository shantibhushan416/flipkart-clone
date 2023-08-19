import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import {
  getProductsReducers,
  getProductDetailsReducers,
} from "./reducers/ProductReducers";
import {cartReducers} from "./reducers/CartReducers";

const reducers = combineReducers({
  getProducts: getProductsReducers,
  getProductDetails: getProductDetailsReducers,
  cart: cartReducers,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
