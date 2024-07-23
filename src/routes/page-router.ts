import { Router } from 'express';
import { schemaValidationMiddleware } from '@/middlewares';
import { PageSchema } from '@/schemas/page-schema';
import { createWelcomePage } from '@/controllers';

const pageRouter = Router();

pageRouter.post('/', schemaValidationMiddleware(PageSchema), createWelcomePage);

export { pageRouter };