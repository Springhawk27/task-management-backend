import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import usersRouter from './app/modules/user/user.route';
import userService from './app/modules/user/user.service';
const app: Application = express();
app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application Routes
app.use('/api/v1/users/', usersRouter);

// testing
app.get('/', async (req: Request, res: Response) => {
  await userService.createUser({
    // id: '999',
    // password: '1234',
    role: 'user',
  });
  res.send('Working Successfully!');
});

export default app;
