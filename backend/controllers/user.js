const bcrypt = require('bcrypt');
const asyncMiddleware = require('../middlewares/async');

exports.getUser = asyncMiddleware(async (req, res) => {
  res.send('User sent');
});
