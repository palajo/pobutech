"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var orderSchema = new _mongoose["default"].Schema({
  orderItems: [{
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    productcode: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    product: {
      type: _mongoose["default"].Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    }
  }],
  shippingAddress: [{
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    deliveryService: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    payment: {
      type: String,
      required: true
    }
  }],
  itemsPrice: {
    type: Number,
    required: true
  },
  shippingPrice: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

var Order = _mongoose["default"].model('Order', orderSchema);

var _default = Order;
exports["default"] = _default;