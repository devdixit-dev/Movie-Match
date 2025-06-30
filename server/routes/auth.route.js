import express from 'express';
import { getRoute, RegisterRoute, VerifyEmail } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.get('/test', getRoute);

authRouter.post('/register', RegisterRoute);

authRouter.post('/verify-email', VerifyEmail);

export default authRouter;