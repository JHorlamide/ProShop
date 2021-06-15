const asyncMiddleware = require('../middlewares/async');
const Products = require('../models/data');

/***
 * @router  GET: api/products
 * @desc    Get all products
 * @access  Public
 * ***/
exports.getProducts = asyncMiddleware(async (req, res) => {
  res.json(Products);
});

/***
 * @router  GET: api/product/:id
 * @desc    Get single product by Id
 * @access  Public
 * ***/
exports.getProduct = asyncMiddleware(async (req, res) => {
  const product = Products.find((product) => {
    return (product._id = req.params.id);
  });

  res.json(product);
});
