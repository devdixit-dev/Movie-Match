import express from 'express';
import { getRoute, RegisterRoute } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.get('/test', getRoute);

authRouter.post('/register', RegisterRoute);

export default authRouter;