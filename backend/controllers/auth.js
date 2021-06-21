import asyncMiddleware from '../middlewares/async.js';
import { User, inputValidation } from '../models/User.js';

export const getUser = asyncMiddleware(async (req, res) => {
  const user = await User.find();
});