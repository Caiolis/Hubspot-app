import { Request, Response } from "express";
import { getOauthToken } from "@/services/oauth-service";
import { tokens } from "../app"

export async function getOauth(req: Request, res: Response) {
  const authorization_code = req.query.code;
  const { accessToken, refreshToken } = await getOauthToken(authorization_code as string);

 tokens.accessToken = accessToken;
 tokens.refreshToken = refreshToken;
  return { accessToken, refreshToken };
};  