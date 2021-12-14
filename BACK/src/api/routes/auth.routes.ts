import { CardDTO } from './../dto/card.dto';
import express, { Request, Response } from 'express';
import * as authcontroller from '../controller/auth';
import { body, validationResult } from 'express-validator';

export const authRouter = express.Router();

authRouter.post('/', async (req: Request, res: Response) => {
  try {
    const result = await authcontroller.login(req.body);
    return res.status(result.auth ? 200 : 403).send(result);
  } catch (e: any) {
    res.status(500).send(e.message);
  }
});
