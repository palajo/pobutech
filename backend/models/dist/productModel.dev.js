"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var productSchema = new _mongoose["default"].Schema({
  category: {
    type: String
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  productcode: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

var Product = _mongoose["default"].model('Product', productSchema);

var _default = Product;
exports["default"] = _default;