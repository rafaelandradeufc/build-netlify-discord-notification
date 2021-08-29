import axios from 'axios';
import { Router } from 'express';
import { Discord } from '../templates/discord';
import { ChannelsUtil } from '../utils/ChannelsUtil';

const routes = Router();

routes.post('/succeeded',async(request, response) => {

    const { name, branch, ssl_url, build_id , context } = request.body;

     await axios.post(ChannelsUtil.selectChannel(name),
     Discord.buildSucceeded(name,branch, ssl_url, build_id,context)
    );

    response.sendStatus(200);
});


routes.post('/failed',async(request, response) => {

    const { name, branch, build_id , context } = request.body;

     await axios.post(ChannelsUtil.selectChannel(name),
     Discord.buildFailed(name,branch, build_id,context)
    );

    response.sendStatus(200);
});

routes.post('/started',async(request, response) => {

    const { name, branch, build_id , context } = request.body;

     await axios.post(ChannelsUtil.selectChannel(name),
     Discord.buildStarted(name,branch, build_id,context)
    );

    response.sendStatus(200);
});


routes.post('/locked',async(request, response) => {

    const { name, branch, build_id , context } = request.body;

     await axios.post(ChannelsUtil.selectChannel(name),
     Discord.buildLocked(name,branch, build_id,context)
    );

    response.sendStatus(200);
});

routes.post('/unlocked',async(request, response) => {

    const { name, branch, build_id , context } = request.body;

     await axios.post(ChannelsUtil.selectChannel(name),
     Discord.buildUnlocked(name,branch, build_id,context)
    );

    response.sendStatus(200);
});

export default routes;