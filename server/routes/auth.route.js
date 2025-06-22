import express from 'express';
import { getRoute } from '../controllers/auth.controller.js';

const authRouter = express.Router();

authRouter.get('/test', getRoute);

export default authRouter;