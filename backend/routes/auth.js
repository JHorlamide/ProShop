import express from 'express';
import { authenticateUser } from '../controllers/auth.js';

const router = express.Router();

/***
 * @router  POST: api/auth/login
 * @desc    Authenticate user & get token.
 * ***/
router.post('/login', authenticateUser);

export default router;
