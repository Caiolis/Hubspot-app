import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export type AppError = Error & {
  name: string;
};

export function errorHandlingMiddleware(
  error: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction, // eslint-disable-line @typescript-eslint/no-unused-vars
) {
  if (error.name === 'invalidTokenError' || error.name === 'invalidPageData') {
    return res.status(httpStatus.EXPECTATION_FAILED).send(error.message);
  }
  return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
}