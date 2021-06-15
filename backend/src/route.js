const express = require('express');

/* Routes */ 
const userRoute = require('../routes/user');
const productRoute = require('../routes/product');

const route = (app) => {
  app.use(express.json({ extended: false }));

  app.use('/api/users', userRoute);
  app.use('/api/products', productRoute);
};

module.exports = route;
