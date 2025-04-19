import express from 'express';
import { storeTestPerformance } from '../controllers/test.controller.js';

const router = express.Router();

router.post('/performance', storeTestPerformance); // POST /api/performance to save test performance

export default router;
