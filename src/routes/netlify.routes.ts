import axios from 'axios';
import { Router } from 'express';
import { Discord } from '../templates/discord';

const routes = Router();

routes.post('/succeeded',async(request, response) => {

    const { name, branch, ssl_url, build_id , context } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL_API,
     Discord.buildSucceeded(name,branch, ssl_url, build_id,context)
    );

    response.sendStatus(200);
});


routes.post('/failed',async(request, response) => {

    const { name, branch, build_id , context } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL_API,
     Discord.buildFailed(name,branch, build_id,context)
    );

    response.sendStatus(200);
});

routes.post('/started',async(request, response) => {

    const { name, branch, build_id , context } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL_API,
     Discord.buildStarted(name,branch, build_id,context)
    );

    response.sendStatus(200);
});


routes.post('/locked',async(request, response) => {

    const { name, branch, build_id , context } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL_API,
     Discord.buildLocked(name,branch, build_id,context)
    );

    response.sendStatus(200);
});

routes.post('/unlocked',async(request, response) => {

    const { name, branch, build_id , context } = request.body;

     await axios.post(process.env.DISCORD_CHANNEL_API,
     Discord.buildUnlocked(name,branch, build_id,context)
    );

    response.sendStatus(200);
});

export default routes;