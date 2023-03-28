import { Request, Response } from 'express';
import { reportService } from '../services/reportService';

const reportControler = async (req: Request, res: Response) => {
  const date = req.body;
  const report = await reportService(date);
  res.status(201).send(report);
};

export { reportControler };
