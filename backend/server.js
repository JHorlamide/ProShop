const express = require('express');
const debug = require('debug');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const startServer = debug('server:started...');

const PORT = process.env.PORT || 5000;

/* Custom modules */
const route = require('./src/route');

/* Database Connection */

/* Initialize routes */
route(app);

app.listen(PORT, () => {
  startServer(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
