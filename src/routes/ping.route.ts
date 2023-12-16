import { Router } from 'express';
import pingController from '@controllers/ping.controller';

const pingRouter = Router();
pingRouter.get('/', pingController.get);

export default pingRouter;
