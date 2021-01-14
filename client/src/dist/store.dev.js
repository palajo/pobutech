"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _cartReducers = require("./redux/reducers/cartReducers");

var _orderReducers = require("./redux/reducers/orderReducers");

var _productReducers = require("./redux/reducers/productReducers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
    shippingAddress: localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {}
  }
};
var reducer = (0, _redux.combineReducers)({
  productList: _productReducers.productListReducer,
  productDetails: _productReducers.productDetailsReducer,
  cart: _cartReducers.cartReducer,
  orderCreate: _orderReducers.orderCreateReducer,
  orderDetails: _orderReducers.orderDetailsReducer,
  productCategoryList: _productReducers.productCategoryListReducer
});
var composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)(reducer, initialState, composeEnhancer((0, _redux.applyMiddleware)(_reduxThunk["default"])));
var _default = store;
exports["default"] = _default;