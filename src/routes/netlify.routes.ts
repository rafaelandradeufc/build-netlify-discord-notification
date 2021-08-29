import axios from 'axios';
import { Router } from 'express';
import { Discord } from '../templates/discord';

const routes = Router();

routes.post('/succeeded',async(request, response) => {

    const { branch, ssl_url, build_id } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL,
     Discord.buildSucceeded(branch, ssl_url, build_id)
    );

    response.sendStatus(200);
});


routes.post('/failed',async(request, response) => {

    const { branch, build_id } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL,
     Discord.buildFailed(branch, build_id)
    );

    response.sendStatus(200);
});

routes.post('/started',async(request, response) => {

    const { branch, build_id } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL,
     Discord.buildStarted(branch, build_id)
    );

    response.sendStatus(200);
});


routes.post('/locked',async(request, response) => {

    const { branch, build_id } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL,
     Discord.buildLocked(branch, build_id)
    );

    response.sendStatus(200);
});

routes.post('/unlocked',async(request, response) => {

    const { branch, build_id } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL,
     Discord.buildUnlocked(branch, build_id)
    );

    response.sendStatus(200);
});

export default routes;