import axios from 'axios';
import { Router } from 'express';
import { Discord } from '../templates/discord';


const routes = Router();

routes.post('/notification/success',async(req, res, next) => {

    const assinatura = req.headers['x-webhook-signature'];
    const {branch,ssl_url,build_id} = req.body;

     await axios.post("https://discord.com/api/webhooks/881192739075678218/ncpuUgV8eRhkXLS0yVQooHACWAIu9hXeHZx8PgLnwTTbc1Tw7sr8EH1PU88NmUYkVwYq",
     Discord.buildSucess(branch,ssl_url,build_id)
    );

    res.sendStatus(200);
});

export default routes;