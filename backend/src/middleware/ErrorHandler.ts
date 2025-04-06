import { Request, Response, NextFunction } from "express";
import { HTTPError } from "../errors/HttpError";

export function ErrorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof HTTPError) {
    return res.status(err.status).json({
      code: err.code || "ERROR",
      message: err.message,
    });
  }

  return res.status(500).json({
    code: "INTERNAL_SERVER_ERROR",
    message: err.message || "An unknown error occurred.",
  });
}
