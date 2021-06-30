import express from 'express';
import auth from '../middlewares/auth.js';
const router = express.Router();

/* Controllers */
import {
  createUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/user.js';

/***
 * @router  GET: api/user/register
 * @desc    Create new user.
 * ***/
router.post('/register', createUser);

/***
 * @router  GET: api/user/register
 * @desc    Create new user.
 * ***/
router.get('/profile', auth, getUserProfile);

/***
 * @router  PUT: api/user/
 * @desc    Update user profile.
 * ***/
router.put('/profile', auth, updateUserProfile);

export default router;
