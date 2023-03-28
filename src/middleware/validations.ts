import { NextFunction, Request, Response } from 'express';
import { registerSchema } from '../schemas';
import CustomError from '../helpers/CustomError';

const registerValidate = (req: Request, res: Response, next: NextFunction) => {
  const userInfo = req.body;
  const { error } = registerSchema.validate(userInfo);
  if (error) throw new CustomError(400, error.details[0].message);
  next();
};

export { registerValidate };
