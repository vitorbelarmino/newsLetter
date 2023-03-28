import { Request, Response } from 'express';
import prisma from '../../prisma/index';

const registerControler = async (req: Request, res: Response) => {
  const userInfo = req.body;
  const newUser = await prisma.forms_answers.create({ data: userInfo });
  res.status(201).send(newUser);
};

export { registerControler };
