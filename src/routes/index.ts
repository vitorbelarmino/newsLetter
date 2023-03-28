import { Router } from 'express';
import { registerControler } from '../controllers/resgisterController';

const router = Router();
router.post('/register', registerControler);

export { router };
