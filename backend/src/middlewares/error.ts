import { ErrorRequestHandler } from 'express';

export function error(): ErrorRequestHandler {

  return (err, req, res, next) => {
  
    if (res.headersSent) {
      return next(err);
    }

    console.error(`${req.url}\n`, err);
  
    res.status(500).send({
      status: 500, 
      error: 'Internal Server Error' 
    });
  };
}
