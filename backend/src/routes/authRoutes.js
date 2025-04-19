import express from 'express';
import { register, login } from '../controllers/auth.controller.js';
import  authMiddleware  from '../middlewares/auth.middleware.js'
import { storeTestPerformance } from '../controllers/test.controller.js'; 

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/performance', authMiddleware, storeTestPerformance);

export default router;
