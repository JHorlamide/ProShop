import express from 'express';

/* Controllers */
import { getUser } from '../controllers/user.js';

const router = express.Router();

/***
 * @router  GET: api/user
 * @desc    Get authenticate user.
 * ***/
router.get('/', getUser);

export default router;
