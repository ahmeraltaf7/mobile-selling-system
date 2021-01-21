import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducer } from "./Reducers/ProductListReducers";
import { cartReducer } from "./Reducers/CartReducers";
import { userLoginReducer } from "./Reducers/userReducers";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer
});

//Getting cart items from the local storage
const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

//Getting user Info from the local storage
const userInfoFromStorage = localStorage.getItem('UserInfo') ? JSON.parse(localStorage.getItem('UserInfo')) : null

const initialState = {
  cart: {cartItems: cartItemsFromStorage},
  userLogin: {userInfo: userInfoFromStorage}
};

//For Api requests in action method
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)) //to connect redux dev tool in chrome 
);

export default store;