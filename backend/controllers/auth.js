import asyncMiddleware from '../middlewares/async.js';
import { User } from '../models/User.js';
import Joi from 'joi';
import bcrypt from 'bcrypt';

const inputValidation = (input) => {
  const schema = Joi.object({
    email: Joi.string()
      .lowercase('lower')
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      })
      .required(),
    password: Joi.string.min(5).max(20).required,
  });

  schema.validate(input);
};

export const authenticateUser = asyncMiddleware(async (req, res) => {
  const { email, password } = req.body;

  const { error } = inputValidation({ email, password });
  if (error) return res.status(400).json({ message: error.details[0].message });

  /* Validate User email */
  const user = await User.findOne({ email });
  if (!user)
    return res
      .status(400)
      .json({ message: 'Invalid email address or password.' });

  /* Validate User password */
  const isMatch = await bcrypt.compare(user.password, password);
  if (!isMatch)
    return res
      .status(400)
      .json({ message: 'Invalid email address or password.' });

  const token = user.generateAuthToken();
  res.json(token);
});
