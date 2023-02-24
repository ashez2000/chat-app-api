import { Router } from 'express';
import * as auth from '../controllers/auth.controller.js';

const authRouter = Router();

authRouter.post('/register', auth.register);
authRouter.post('/login', auth.login);

export default authRouter;
