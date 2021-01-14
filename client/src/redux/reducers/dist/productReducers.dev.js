"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productDetailsReducer = exports.productCategoryListReducer = exports.productListReducer = void 0;

var _productConstants = require("../constants/productConstants");

var productListReducer = function productListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    products: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRODUCT_LIST_REQUEST:
      return {
        loading: true
      };

    case _productConstants.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        pages: action.payload.pages,
        page: action.payload.page
      };

    case _productConstants.PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

exports.productListReducer = productListReducer;

var productCategoryListReducer = function productCategoryListReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    loading: true,
    categories: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRODUCT_CATEGORY_LIST_REQUEST:
      return {
        loading: true
      };

    case _productConstants.PRODUCT_CATEGORY_LIST_SUCCESS:
      return {
        loading: false,
        categories: action.payload
      };

    case _productConstants.PRODUCT_CATEGORY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

exports.productCategoryListReducer = productCategoryListReducer;

var productDetailsReducer = function productDetailsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    product: {},
    loading: true
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _productConstants.PRODUCT_DETAILS_REQUEST:
      return {
        loading: true
      };

    case _productConstants.PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload
      };

    case _productConstants.PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

exports.productDetailsReducer = productDetailsReducer;