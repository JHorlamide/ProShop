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
  getUserById,
  updateUser,
} from '../controllers/user.js';

/***
 * @router  GET: /api/users
 * @desc    GET all users | Admin Users Only Can Access This Endpoint
 * ***/
router.get('/', [auth, admin], getUsers);

/***
 * @router  GET: api/users/id | PUT: api/users/id | DELETE: api/user/:id
 * @desc    Get user by Id | Update User By Id | (Delete user) => Admin Users Only Can Access This Endpoint
 * ***/
router
  .route('/:id')
  .get([auth, admin], getUserById)
  .put([auth, admin], updateUser)
  .delete([auth, admin], deleteUser);

/***
 * @router  GET: api/user/register
 * @desc    Create new user.
 * ***/
router.post('/register', createUser);

/***
 * @router  GET: api/user/profile
 * @desc    Get logged in user profile
 * ***/
router.get('/profile/user-profile', auth, getUserProfile);

/***
 * @router  PUT: api/users/profile
 * @desc    Update me profile.
 * ***/
router.put('/profile', auth, updateUserProfile);

export default router;












// router.get('/:id', [auth, admin], getUserById);

/***
 * @router  PUT: api/users/id
 * @desc    Update User By Id | Admin Users Only Can Access This Endpoint.
 * ***/
// router.put('/:id', [auth, admin], updateUser);

/***
 * @router  DELETE: api/user/:id
 * @desc    Delete user | Admin Users Only Can Access This Endpoint.
 * ***/
// router.delete('/:id', [auth, admin], deleteUser);