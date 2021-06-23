import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Joi from 'joi';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },

    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);


/* JsonWebToken */
userSchema.methods.generateAuthToken = function () {
  const payload = {
    id: this.id,
    isAdmin: this.isAdmin,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET);

  return token;
};

userSchema.methods.matchPassword = async function (userPassword) {
  return await bcrypt.compare(userPassword, this.password);
};

/* Input validation */
export const inputValidation = (input) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(255).required(),
    email: Joi.string()
      .lowercase('lower')
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net'] },
      }),
    password: Joi.string().min(5).max(20).required(),
  });

  return schema.validate(input);
};


/* Define model */
export const User = mongoose.model('User', userSchema);
