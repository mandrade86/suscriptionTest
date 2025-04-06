import express, { Request, Response } from "express";
import cors from "cors";
import config from "./config";
import api from "./routes";
import { ErrorHandler } from "./middleware/ErrorHandler";

export const createServer = () => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(express.urlencoded({ extended: true }))
    .use(express.json())
    .use(cors());

  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ ok: true, environment: config.env });
  });

  app.use("/api", api);
  app.use(ErrorHandler);

  return app;
};