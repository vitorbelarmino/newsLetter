import { NextFunction, Request, Response } from 'express';
import { registerSchema, reportSchema } from '../schemas';
import CustomError from '../helpers/CustomError';

const registerValidate = (req: Request, res: Response, next: NextFunction) => {
  const userInfo = req.body;
  const { error } = registerSchema.validate(userInfo);
  if (error) throw new CustomError(400, error.details[0].message);
  next();
};

const reportValidate = (req: Request, res: Response, next: NextFunction) => {
  const date = req.body;
  const { error } = reportSchema.validate(date);
  if (error) throw new CustomError(400, error.details[0].message);
  next();
};

export { registerValidate, reportValidate };
