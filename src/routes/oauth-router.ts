import { Router } from 'express';
import { getOauth } from '@/controllers/oauth-controller';
const oauthRouter = Router();

oauthRouter.get('/oauth/callback', getOauth);

export { oauthRouter };