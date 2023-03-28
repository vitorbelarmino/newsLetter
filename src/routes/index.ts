import { Router } from 'express';
import { registerControler } from '../controllers/resgisterController';
import { registerValidate } from '../middleware/validations';

const router = Router();
router.post('/register', registerValidate, registerControler);

export { router };
