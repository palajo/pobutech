"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _orderRouter = _interopRequireDefault(require("./routers/orderRouter.js"));

var _productRouter = _interopRequireDefault(require("./routers/productRouter.js"));

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));

_mongoose["default"].connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/pobutech', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use('/products', _productRouter["default"]);
app.use('/orders', _orderRouter["default"]);

var _dirname = _path["default"].resolve();

app.use('/uploads', _express["default"]["static"](_path["default"].join(_dirname, '/uploads')));
app.use(function (err, req, res, next) {
  res.status(500).send({
    message: err.message
  });
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Server is run on port ".concat(port, "."));
});