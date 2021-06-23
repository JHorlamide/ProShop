import express from 'express';
const router = express.Router();

/* Controllers */
import { getProducts, getProductById } from '../controllers/product.js';

/***
 * @router  GET: api/products
 * @desc    Get all products.
 * ***/
router.get('/', getProducts);

/***
 * @router  GET: api/products/:id
 * @desc    Get product by id
 * ***/
router.get('/:id', getProductById);

export default router;
