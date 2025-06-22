import express from 'express';
import 'dotenv/config';

import { Log } from './middlewares/log.js';
import Database from './config/database.js';
import authRouter from './routes/auth.route.js';

const app = express();
const port = process.env.PORT || 4000;

Database();

app.use(Log);
app.use(express.json());

app.use('/auth/v1', authRouter);

app.get('/', (req, res) => {
  res.send(`Home or Root Page`);
});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port} 🚀`);
});

export default app;