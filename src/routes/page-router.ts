import { Router } from 'express';
import { schemaValidationMiddleware } from '@/middlewares';
import { PageSchema } from '@/schemas/page-schema';

const pageRouter = Router();

pageRouter.post('/', schemaValidationMiddleware(PageSchema), );

export { pageRouter };