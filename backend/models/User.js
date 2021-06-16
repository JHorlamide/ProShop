import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
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

/* Define model */
export const User = mongoose.model('User', userSchema);

export const inputValidation = (input) => {};
