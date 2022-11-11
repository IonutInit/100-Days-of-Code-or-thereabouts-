import express from 'express';
import morgan from 'morgan';

import {riddlesRouter} from './routes/routes.js'

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/riddles', riddlesRouter);

export default app;