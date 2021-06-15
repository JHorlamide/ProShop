const express = require('express');
const debug = require('debug');
const app = express();

const startServer = debug('server:started...')

const PORT = process.env.PORT || 3000;

/* Custom modules */
const route = require('./src/route');

/* Database Connection */

/* Initialize routes */
route(app);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  startServer(`Server started on port ${PORT}`);
});
