import express from 'express';
import AiResponse from '../Controllers/ai.js';
const router = express.Router();

router.post('/', AiResponse);

export default router;
