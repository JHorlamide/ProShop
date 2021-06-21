import express from 'express';
import { createUser } from '../controllers/auth.js';
const router = express.Router();

/***
 * @router  GET: api/products
 * @desc    Authenticate admin.
 * ***/
router.get('/sign-in', createUser);

export default router;
