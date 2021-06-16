import asyncMiddleware from '../middlewares/async.js';
import { Product } from '../models/Product.js';

/***
 * @router  GET: api/products
 * @desc    Get all products
 * @access  Public
 * ***/
export const getProducts = asyncMiddleware(async (req, res) => {
  const products = await Product.find();
  console.log(products);
  res.json(products);
});

/***
 * @router  GET: api/product/:id
 * @desc    Get single product by Id
 * @access  Public
 * ***/
export const getProduct = asyncMiddleware(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    res.status(404);
    throw new Error('Product not found');
  }
  res.json(product);
});
