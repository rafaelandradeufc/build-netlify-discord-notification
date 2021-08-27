import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();

app.use(express.json());

app.use(cors());

app.post('/notification/',async(req, res, next) => {

    console.log(req.headers);

    await axios.post("https://discord.com/api/webhooks/878432196187267142/FWCfspMy9BGFx55jwhXFLDmH5DG9y5kw7DaG-g3HqEKpa6PEWzadhYbhwK8rVDnIPLPM",{
        content:"Testando......."
    });
    res.send(200);
});

app.listen(3333);
