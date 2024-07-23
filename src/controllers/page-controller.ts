import { Request, Response } from "express";
import { PageType } from "@/protocols";
import { createPage } from "@/services";
import httpStatus from "http-status";

export async function createWelcomePage(req: Request, res: Response) {
  const pageData = req.body as PageType;

  const page = createPage(pageData);
  return res.status(httpStatus.OK).send(page)
};