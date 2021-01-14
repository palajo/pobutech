"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _orderModel = _interopRequireDefault(require("../models/orderModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var orderRouter = _express["default"].Router();

orderRouter.post('/', (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var order, createdOrder;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.body.orderItems.length == 0)) {
            _context.next = 4;
            break;
          }

          res.status(400).send({
            message: 'Your cart is empty!'
          });
          _context.next = 9;
          break;

        case 4:
          order = new _orderModel["default"]({
            orderItems: req.body.orderItems,
            shippingAddress: req.body.shippingAddress,
            itemsPrice: req.body.itemsPrice,
            shippingPrice: req.body.shippingPrice,
            totalPrice: req.body.totalPrice
          });
          _context.next = 7;
          return regeneratorRuntime.awrap(order.save());

        case 7:
          createdOrder = _context.sent;
          res.status(201).send({
            message: 'Order has been created!',
            order: createdOrder
          });

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
}));
orderRouter.get('/', (0, _expressAsyncHandler["default"])(function _callee2(req, res) {
  var orders;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_orderModel["default"].find());

        case 2:
          orders = _context2.sent;
          res.send(orders);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}));
orderRouter.get('/:id', (0, _expressAsyncHandler["default"])(function _callee3(req, res) {
  var order;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_orderModel["default"].findById(req.params.id));

        case 2:
          order = _context3.sent;

          if (order) {
            res.send(order);
          } else {
            res.status(404).send({
              message: 'Order Not Found'
            });
          }

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}));
var _default = orderRouter;
exports["default"] = _default;