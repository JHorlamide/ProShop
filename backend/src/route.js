import express from 'express';

/* Routes */
import userRoute from '../routes/user.js';
import productRoute from '../routes/product.js';
import authRoute from '../routes/auth.js';

/* Middleware */
import { errorHandler, notFound } from '../middlewares/error_handler.js';

const route = (app) => {
  app.use(express.json({ extended: false }));

  app.use('/api/users', userRoute);
  app.use('/api/products', productRoute);
  app.use('/api/auth', authRoute);

  app.use(notFound);
  app.use(errorHandler);
};

export default route;
