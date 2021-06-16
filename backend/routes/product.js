import express from 'express';
const router = express.Router();

/* Controllers */
import { getProducts, getProduct } from '../controllers/product.js';

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

export default router;
