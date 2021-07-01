import express from 'express';
import auth from '../middlewares/auth.js';
const router = express.Router();

/* Controllers */
import { order } from '../controllers/order.js';

/***
 * @router  POST: api/order
 * @desc    Create new order.
 * ***/
router.post('/', auth, order);

export default router;
