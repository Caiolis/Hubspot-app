import { Request, Response } from "express";
import { pageData } from "@/templates/pageData";
import { createPage } from "@/services";
import httpStatus from "http-status";

export async function createWelcomePage(req: Request, res: Response) {
  try {
    const page = createPage(pageData);
    
    return res.status(httpStatus.OK).send(page)
  } catch (error) {
    console.error('Error creating welcome page:', error.message);
    res.status(500).send('Error creating welcome page');
  }
};