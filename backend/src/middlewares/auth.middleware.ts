import { NextFunction, Response } from 'express';
import { PUBLIC_ROUTES } from '../utils';

const protect = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url)
  if (
    PUBLIC_ROUTES.find((string) => {
      if (req.url.includes(string)) {
        return true;
      }
      return string === req.url;
    })
  ) {
    return next();
  }
};

export default protect;
