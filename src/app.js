import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'express-async-errors';

import authRouter from './routes/auth.route.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => res.send('Hello world'));
app.use('/api/auth', authRouter);
app.use((err, req, res, next) => {
  return res.status(500).json({ error: err.message });
});

export default app;
