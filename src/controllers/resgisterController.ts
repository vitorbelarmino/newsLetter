import { Request, Response } from 'express';
import { registerService } from '../services/registerService';

const registerControler = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const newUser = await registerService(userInfo);
  res.status(201).send(newUser);
};

export { registerControler };
