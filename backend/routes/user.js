import express from 'express';
const router = express.Router();

/* Controllers */
import { createUser } from '../controllers/user.js';

/***
 * @router  GET: api/user/register
 * @desc    Create new user.
 * ***/
router.post('/register', createUser);

export default router;
