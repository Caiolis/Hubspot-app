import express, { json, Request, Response } from "express";
import { pageRouter, oauthRouter } from "./routes";
import "express-async-errors";
import cors from 'cors';
import { errorHandlingMiddleware } from "@/middlewares";

const app = express();
app
  .use(json())
  .use(cors())
  .use(oauthRouter)
  .use('/page', pageRouter)
  .get('/health', (_req, res) => res.send('OK!'))
  .use(errorHandlingMiddleware);

export default app;