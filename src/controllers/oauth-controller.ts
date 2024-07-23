import { Request, Response } from "express";


export async function getOauth(req: Request, res: Response) {
  const authorization_code = req.query.code;
  
};