import express from 'express';

/* Controllers */
import { getUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUser);

export default router;
