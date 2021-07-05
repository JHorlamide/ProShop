import express from 'express';
import { auth, admin } from '../middlewares/auth.js';
const router = express.Router();

/* Controllers */
import {
  createUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUsersById,
  updateUser,
} from '../controllers/user.js';

/***
 * @router  GET: api/users
 * @desc    Get all users.
 * ***/
router.get('/', [auth, admin], getUsers);

/***
 * @router  GET: api/users/id
 * @desc    Get by Id
 * ***/
router.get('/:id', [auth, admin], getUsersById);

/***
 * @router  PUT: api/users/id
 * @desc    Update User By Id
 * ***/
router.put('/:id', [auth, admin], updateUser);

/***
 * @router  DELETE: api/user/:id
 * @desc    Delete user
 * ***/
router.delete('/:id', [auth, admin], deleteUser);

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
