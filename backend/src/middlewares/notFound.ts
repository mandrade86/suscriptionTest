import { NextFunction, Request, Response } from 'express';

export function notFound() {
  return (req: Request, res: Response, next: NextFunction) => {
    res
      .status(404)
      .send({
        status: 404,
        message: `Route not found: ${req.path}`
      });
  };
}
