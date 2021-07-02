import express from 'express';
import auth from '../middlewares/auth.js';
const router = express.Router();

/* Controllers */
import { addOrderItem, getOrderById } from '../controllers/order.js';

/***
 * @router  POST: api/orders
 * @desc    Create new order.
 * ***/
router.post('/', auth, addOrderItem);

/***
 * @router  GET: api/orders/id
 * @desc    Get order by Id.
 * ***/
router.get('/:id', auth, getOrderById);

export default router;
