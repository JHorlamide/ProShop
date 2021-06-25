import express from 'express';
import auth from '../middlewares/auth.js';
const router = express.Router();

/* Controllers */
import { createUser, getUserProfile } from '../controllers/user.js';

/***
 * @router  GET: api/user/register
 * @desc    Create new user.
 * ***/
router.post('/register', createUser);

/***
 * @router  GET: api/user/profile
 * @desc    GEt user profile.
 * ***/
router.get('/profile', auth, getUserProfile);

export default router;
