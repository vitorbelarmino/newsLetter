import { Router } from 'express';
import { registerControler } from '../controllers/resgisterController';

const router = Router();
console.log('router');
router.post('/register', registerControler);

export { router };
