import asyncMiddleware from '../middlewares/async.js';
import { Order } from '../models/Order.js';

/***
 * @router  GET: api/order
 * @desc    Create new orders
 * @access  Private
 * ***/
export const order = asyncMiddleware(async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
