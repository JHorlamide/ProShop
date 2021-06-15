const express = require('express');
const router = express.Router();

/* Controllers */
const { getProducts, getProduct } = require('../controllers/product');

/***
 * @router  GET: api/products
 * @desc    Authenticate admin.
 * ***/
router.get('/', getProducts);

/***
 * @router  GET: api/products/:id
 * @desc    Get single product
 * ***/
router.get('/:id', getProduct);

module.exports = router;
