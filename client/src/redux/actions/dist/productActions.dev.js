"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detailsProduct = exports.listProductCategories = exports.listProducts = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _productConstants = require("../constants/productConstants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var listProducts = function listProducts(_ref) {
  var _ref$pageNumber = _ref.pageNumber,
      pageNumber = _ref$pageNumber === void 0 ? '' : _ref$pageNumber,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$category = _ref.category,
      category = _ref$category === void 0 ? '' : _ref$category,
      _ref$order = _ref.order,
      order = _ref$order === void 0 ? '' : _ref$order,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 0 : _ref$max;
  return function _callee(dispatch) {
    var _ref2, data;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            dispatch({
              type: _productConstants.PRODUCT_LIST_REQUEST
            });
            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/products?pageNumber=".concat(pageNumber, "&title=").concat(title, "&category=").concat(category, "&min=").concat(min, "&max=").concat(max, "&order=").concat(order)));

          case 4:
            _ref2 = _context.sent;
            data = _ref2.data;
            dispatch({
              type: _productConstants.PRODUCT_LIST_SUCCESS,
              payload: data
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: _productConstants.PRODUCT_LIST_FAIL,
              payload: _context.t0.message
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.listProducts = listProducts;

var listProductCategories = function listProductCategories() {
  return function _callee2(dispatch) {
    var _ref3, data;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            dispatch({
              type: _productConstants.PRODUCT_CATEGORY_LIST_REQUEST
            });
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/products/categories/"));

          case 4:
            _ref3 = _context2.sent;
            data = _ref3.data;
            dispatch({
              type: _productConstants.PRODUCT_CATEGORY_LIST_SUCCESS,
              payload: data
            });
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](1);
            dispatch({
              type: _productConstants.PRODUCT_CATEGORY_LIST_FAIL,
              payload: _context2.t0.response && _context2.t0.response.data.message ? _context2.t0.response.data.message : _context2.t0.message
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.listProductCategories = listProductCategories;

var detailsProduct = function detailsProduct(productId) {
  return function _callee3(dispatch) {
    var _ref4, data;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_REQUEST,
              payload: productId
            });
            _context3.prev = 1;
            _context3.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get("/products/".concat(productId)));

          case 4:
            _ref4 = _context3.sent;
            data = _ref4.data;
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_SUCCESS,
              payload: data
            });
            _context3.next = 12;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            dispatch({
              type: _productConstants.PRODUCT_DETAILS_FAIL,
              payload: _context3.t0.response && _context3.t0.response.data.message ? _context3.t0.response.data.message : _context3.t0.message
            });

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
};

exports.detailsProduct = detailsProduct;