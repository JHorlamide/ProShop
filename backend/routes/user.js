import express from 'express';

/* Controllers */
import { createUser } from '../controllers/user.js';

const router = express.Router();

/***
 * @router  GET: api/user
 * @desc    Create new user.
 * ***/
router.get('/', createUser);

export default router;
