import express from 'express';
import { authenticateUser } from '../controllers/auth.js';

const router = express.Router();


/***
 * @router  GET: api/products
 * @desc    Authenticate admin.
 * ***/
router.get('/login', authenticateUser);

export default router;
