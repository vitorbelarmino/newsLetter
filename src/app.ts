import 'express-async-errors';
import express from 'express';
import 'dotenv/config';
import { router } from './routes';
import globalError from './middleware/GlobalError';

const app = express();
app.use(express.json());
app.use(router);
app.use(globalError);

export { app };
