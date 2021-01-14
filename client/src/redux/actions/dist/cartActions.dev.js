"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveShippingAddress = exports.removeFromCart = exports.addToCart = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _cartConstants = require("../constants/cartConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addToCart = function addToCart(productId, quantity) {
  return function _callee(dispatch, getState) {
    var _ref, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_axios["default"].get("/products/".concat(productId)));

          case 2:
            _ref = _context.sent;
            data = _ref.data;
            dispatch({
              type: _cartConstants.CART_ADD_ITEM,
              payload: {
                title: data.title,
                image: data.image,
                price: data.price,
                productcode: data.productcode,
                product: data._id,
                quantity: quantity
              }
            });
            alert("".concat(data.title, " x").concat(quantity, " added to cart!"));
            localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.addToCart = addToCart;

var removeFromCart = function removeFromCart(productId) {
  return function (dispatch, getState) {
    dispatch({
      type: _cartConstants.CART_REMOVE_ITEM,
      payload: productId
    });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
  };
};

exports.removeFromCart = removeFromCart;

var saveShippingAddress = function saveShippingAddress(data) {
  return function (dispatch) {
    dispatch({
      type: _cartConstants.CART_SAVE_SHIPPING_ADDRESS,
      payload: data
    });
    localStorage.setItem('shippingAddress', JSON.stringify(data));
  };
};

exports.saveShippingAddress = saveShippingAddress;