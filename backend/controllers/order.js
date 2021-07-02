import asyncMiddleware from '../middlewares/async.js';
import { Order } from '../models/Order.js';

/***
 * @router  GET: api/order
 * @desc    Create new orders
 * @access  Private
 * ***/
export const addOrderItem = asyncMiddleware(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
    shippingPrice,
    taxPrice,
    itemsPrice,
  } = req.body;

  /* Check to see if order items is no empty */
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No Order Item');
    return;
  } else {
    const order = new Order({
      user: req.user._id,
      orderItems,
      shippingAddress,
      paymentMethod,
      totalPrice,
      shippingPrice,
      taxPrice,
      itemsPrice,
    });

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});
