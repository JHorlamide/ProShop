import bcrypt from 'bcrypt';
import asyncMiddleware from '../middlewares/async.js';
import { User, inputValidation } from '../models/User.js';

/***
 * @router  GET: api/user
 * @desc    Create new user
 * @access  Public
 * ***/
export const createUser = asyncMiddleware(async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  const { error } = inputValidation({ name, email, password });
  if (error) {
    console.log(error.details[0].message);
    return res.status(400).json({ message: error.details[0].message });
  }

  let user = await User.findOne({ email: email });
  if (user) return res.status(400).json({ message: 'User already exist' });

  user = new User({ name, email, password, isAdmin });

  /* Hash user password */
  const salt = await bcrypt.genSalt(12);
  user.password = await bcrypt.hash(user.password, salt);
  const token = user.generateAuthToken();

  /* Save user to the database and send token to client */
  await user.save();
  res.json(token);
});
