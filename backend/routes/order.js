import express from 'express';
import { auth } from '../middlewares/auth.js';
const router = express.Router();

/* Controllers */
import {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getUserOrders,
} from '../controllers/order.js';

/***
 * @router  POST: api/orders
 * @desc    Create new order.
 * ***/
router.post('/', auth, addOrderItem);

/***
 * @router  PUT: api/orders/id/pay
 * @desc    Update order to paid.
 * ***/
router.get('/myorders', auth, getUserOrders);

/***
 * @router  GET: api/orders/id
 * @desc    Get order by Id.
 * ***/
router.get('/:id', auth, getOrderById);

/***
 * @router  PUT: api/orders/id/pay
 * @desc    Update order to paid.
 * ***/
router.put('/:id/pay', auth, updateOrderToPaid);

export default router;
