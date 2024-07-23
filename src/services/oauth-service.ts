import { invalidTokenError } from "@/errors";
import axios from "axios";

export async function getOauthToken(authorization_code: string) {
  if(!authorization_code) throw invalidTokenError();

  const params = new URLSearchParams({
    grant_type: 'authorization_code',
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    redirect_uri: process.env.REDIRECT_URI,
    code: authorization_code 
  });
 
  const response = await axios.post('https://api.hubapi.com/oauth/v1/token', params);
  const accessToken = response.data.access_token;
  const refreshToken = response.data.refresh_token;

  return { accessToken, refreshToken};
}