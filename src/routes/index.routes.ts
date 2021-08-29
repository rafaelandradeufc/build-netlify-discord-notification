
import { Router } from 'express';
import { checkJwt } from '../middlewares/checkJwt';
import netlify from './netlify.routes';

const routes = Router();

routes.use('/notification/netlify',[checkJwt],netlify);

export default routes;