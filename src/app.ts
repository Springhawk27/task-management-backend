import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import userRouter from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
app.use('/api/v1/users/', userRouter);

// global error handler
app.use(globalErrorHandler);

// test
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully!');
});

export default app;
