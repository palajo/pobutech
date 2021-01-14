"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _data = _interopRequireDefault(require("../data.js"));

var _productModel = _interopRequireDefault(require("../models/productModel.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var productRouter = _express["default"].Router();

productRouter.get('/', (0, _expressAsyncHandler["default"])(function _callee(req, res) {
  var pageSize, page, title, category, seller, order, min, max, rating, titleFilter, sellerFilter, categoryFilter, priceFilter, ratingFilter, sortOrder, count, products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          pageSize = 12;
          page = Number(req.query.pageNumber) || 1;
          title = req.query.title || '';
          category = req.query.category || '';
          seller = req.query.seller || '';
          order = req.query.order || '';
          min = req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
          max = req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;
          rating = req.query.rating && Number(req.query.rating) !== 0 ? Number(req.query.rating) : 0;
          titleFilter = title ? {
            title: {
              $regex: title,
              $options: 'i'
            }
          } : {};
          sellerFilter = seller ? {
            seller: seller
          } : {};
          categoryFilter = category ? {
            category: category
          } : {};
          priceFilter = min && max ? {
            price: {
              $gte: min,
              $lte: max
            }
          } : {};
          ratingFilter = rating ? {
            rating: {
              $gte: rating
            }
          } : {};
          sortOrder = order === 'lowest' ? {
            price: 1
          } : order === 'highest' ? {
            price: -1
          } : order === 'toprated' ? {
            rating: -1
          } : {
            _id: -1
          };
          _context.next = 17;
          return regeneratorRuntime.awrap(_productModel["default"].count(_objectSpread({}, sellerFilter, {}, titleFilter, {}, categoryFilter, {}, priceFilter, {}, ratingFilter)));

        case 17:
          count = _context.sent;
          _context.next = 20;
          return regeneratorRuntime.awrap(_productModel["default"].find(_objectSpread({}, sellerFilter, {}, titleFilter, {}, categoryFilter, {}, priceFilter, {}, ratingFilter)).populate('seller', 'seller.name seller.logo').sort(sortOrder).skip(pageSize * (page - 1)).limit(pageSize));

        case 20:
          products = _context.sent;
          res.send({
            products: products,
            page: page,
            pages: Math.ceil(count / pageSize)
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  });
}));
productRouter.get('/seed', (0, _expressAsyncHandler["default"])(function _callee2(req, res) {
  var products, createdProducts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // await Product.remove({});
          products = _data["default"].products.map(function (product) {
            return _objectSpread({}, product);
          });
          _context2.next = 3;
          return regeneratorRuntime.awrap(_productModel["default"].insertMany(products));

        case 3:
          createdProducts = _context2.sent;
          res.send({
            createdProducts: createdProducts
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
}));
productRouter.get('/categories', (0, _expressAsyncHandler["default"])(function _callee3(req, res) {
  var categories;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_productModel["default"].find().distinct('category'));

        case 2:
          categories = _context3.sent;
          res.send(categories);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
}));
productRouter.get('/:id', (0, _expressAsyncHandler["default"])(function _callee4(req, res) {
  var product;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_productModel["default"].findById(req.params.id).populate('seller', 'seller.name seller.logo seller.rating seller.numReviews'));

        case 2:
          product = _context4.sent;

          if (product) {
            res.send(product);
          } else {
            res.status(404).send({
              message: 'Product Not Found'
            });
          }

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
}));
productRouter.post('/', (0, _expressAsyncHandler["default"])(function _callee5(req, res) {
  var product, createdProduct;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          product = new _productModel["default"]({
            name: 'sample name ' + Date.now(),
            seller: req.user._id,
            image: '/images/p1.jpg',
            price: 0,
            category: 'sample category',
            brand: 'sample brand',
            countInStock: 0,
            rating: 0,
            numReviews: 0,
            description: 'sample description'
          });
          _context5.next = 3;
          return regeneratorRuntime.awrap(product.save());

        case 3:
          createdProduct = _context5.sent;
          res.send({
            message: 'Product Created',
            product: createdProduct
          });

        case 5:
        case "end":
          return _context5.stop();
      }
    }
  });
}));
productRouter.put('/:id', (0, _expressAsyncHandler["default"])(function _callee6(req, res) {
  var productId, product, updatedProduct;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          productId = req.params.id;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_productModel["default"].findById(productId));

        case 3:
          product = _context6.sent;

          if (!product) {
            _context6.next = 18;
            break;
          }

          product.name = req.body.name;
          product.price = req.body.price;
          product.image = req.body.image;
          product.category = req.body.category;
          product.brand = req.body.brand;
          product.countInStock = req.body.countInStock;
          product.description = req.body.description;
          _context6.next = 14;
          return regeneratorRuntime.awrap(product.save());

        case 14:
          updatedProduct = _context6.sent;
          res.send({
            message: 'Product Updated',
            product: updatedProduct
          });
          _context6.next = 19;
          break;

        case 18:
          res.status(404).send({
            message: 'Product Not Found'
          });

        case 19:
        case "end":
          return _context6.stop();
      }
    }
  });
}));
productRouter["delete"]('/:id', (0, _expressAsyncHandler["default"])(function _callee7(req, res) {
  var product, deleteProduct;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(_productModel["default"].findById(req.params.id));

        case 2:
          product = _context7.sent;

          if (!product) {
            _context7.next = 10;
            break;
          }

          _context7.next = 6;
          return regeneratorRuntime.awrap(product.remove());

        case 6:
          deleteProduct = _context7.sent;
          res.send({
            message: 'Product Deleted',
            product: deleteProduct
          });
          _context7.next = 11;
          break;

        case 10:
          res.status(404).send({
            message: 'Product Not Found'
          });

        case 11:
        case "end":
          return _context7.stop();
      }
    }
  });
}));
var _default = productRouter;
exports["default"] = _default;