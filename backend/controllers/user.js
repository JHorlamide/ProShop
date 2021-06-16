import bcrypt from 'bcrypt';
import asyncMiddleware from '../middlewares/async.js';

export const getUser = asyncMiddleware(async (req, res) => {
  res.send('User sent');
});
