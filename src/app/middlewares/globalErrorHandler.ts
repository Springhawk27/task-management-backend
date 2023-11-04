import { NextFunction, Request, Response } from 'express';

const globalErrorHandler = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(400).json({ err: err });
  next();
};

export default globalErrorHandler;
