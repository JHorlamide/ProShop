import asyncMiddleware from '../middlewares/async.js';
import { Order } from '../models/Order.js';
// import { orderItemsValidation } from '../models/Order.js';

/***
 * @router  POST: api/order
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

  // const { error } = orderItemsValidation(req.body);
  // if (error) {
  //   console.log(error.details[0].message);
  //   return res.status(400).json({ message: error.details[0].message });
  // }

  /* Check to see if order items is no empty */
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No Order Items');
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

/***
 * @router  GET: api/orders/id
 * @desc    Get order by id
 * @access  Private
 * ***/
export const getOrderById = asyncMiddleware(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    'user',
    'name email'
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});
