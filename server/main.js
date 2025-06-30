import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import cors from 'cors';
import rateLimiter from 'express-rate-limit';
import cookieParser from 'cookie-parser';

import { Log } from './middlewares/log.js';
import Database from './config/database.js';
import authRouter from './routes/auth.route.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const port = process.env.PORT || 4000;

Database();

app.use(Log);
app.use(errorHandler);
app.use(cookieParser());
app.use(express.json());
app.use(helmet());
app.use(cors());

const limiter = rateLimiter({ windowMs: 15 * 60 * 1000, max: 100 }); // rate limiter
app.use(limiter);

app.use('/api/v1/auth', authRouter);

app.get('/', (req, res) => {
  res.send(`Home or Root Page`);
});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port} 🚀`);
});

export default app;