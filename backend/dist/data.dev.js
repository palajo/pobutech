"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var data = {
  products: [{
    category: 'Fridges',
    image: 'products/product-big.png',
    title: 'Product Title #1',
    productcode: 52340,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 799
  }, {
    category: 'Fridges',
    image: 'products/product-big.png',
    title: 'Product Title #2',
    productcode: 52351,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 999
  }, {
    category: 'Fridges',
    image: 'products/product-big.png',
    title: 'Product Title #3',
    productcode: 52362,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 1799
  }, {
    category: 'Fridges',
    image: 'products/product-big.png',
    title: 'Product Title #4',
    productcode: 52373,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 1699
  }, {
    category: 'Fridges',
    image: 'products/product-big.png',
    title: 'Product Title #5',
    productcode: 52384,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 1499
  }, {
    image: 'products/product-big.png',
    title: 'Product Title #6',
    productcode: 52395,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 1199
  }, {
    category: 'Fridges',
    image: 'products/product-big.png',
    title: 'Product Title #7',
    productcode: 52406,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 4839
  }, {
    category: 'Fridges',
    image: 'products/product-big.png',
    title: 'Product Title #8',
    productcode: 52417,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 6479
  }, {
    category: 'Fridges',
    image: 'products/product-big.png',
    title: 'Product Title #9',
    productcode: 52428,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 1479
  }, {
    category: 'Fridges',
    image: 'products/product-big.png',
    title: 'Product Title #10',
    productcode: 52439,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 1089
  }, {
    category: 'Ovens',
    image: 'products/product-big.png',
    title: 'Product Title #11',
    productcode: 52450,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 1999
  }, {
    category: 'Ovens',
    image: 'products/product-big.png',
    title: 'Product Title #12',
    productcode: 52461,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 2199
  }, {
    category: 'Ovens',
    image: 'products/product-big.png',
    title: 'Product Title #13',
    productcode: 52472,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 4399
  }, {
    category: 'Ovens',
    image: 'products/product-big.png',
    title: 'Product Title #14',
    productcode: 52483,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 99
  }, {
    category: 'Ovens',
    image: 'products/product-big.png',
    title: 'Product Title #15',
    productcode: 52494,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 249
  }, {
    category: 'Dishwashers',
    image: 'products/product-big.png',
    title: 'Product Title #16',
    productcode: 52505,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 139
  }, {
    category: 'Dishwashers',
    image: 'products/product-big.png',
    title: 'Product Title #17',
    productcode: 52516,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 769
  }, {
    image: 'products/product-big.png',
    title: 'Product Title #18',
    productcode: 52527,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 439
  }, {
    category: 'Dishwashers',
    image: 'products/product-big.png',
    title: 'Product Title #19',
    productcode: 52538,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 399
  }, {
    category: 'Dishwashers',
    image: 'products/product-big.png',
    title: 'Product Title #20',
    productcode: 52549,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 689
  }, {
    category: 'Dishwashers',
    image: 'products/product-big.png',
    title: 'Product Title #21',
    productcode: 52560,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 549
  }, {
    category: 'Freezers',
    image: 'products/product-big.png',
    title: 'Product Title #22',
    productcode: 52571,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 549
  }, {
    category: 'Freezers',
    image: 'products/product-big.png',
    title: 'Product Title #23',
    productcode: 52582,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc_id_idunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 3001
  }]
};
var _default = data;
exports["default"] = _default;