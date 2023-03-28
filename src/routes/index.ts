import { Router } from 'express';
import { registerControler } from '../controllers/resgisterController';
import { reportControler } from '../controllers/reportController';
import { registerValidate, reportValidate } from '../middleware/validations';

const router = Router();
router.post('/register', registerValidate, registerControler)
  .get('/report', reportValidate, reportControler);

export { router };
