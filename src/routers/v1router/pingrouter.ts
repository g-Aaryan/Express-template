import express from 'express';
import { pingHandler } from '../../controller/pingcontroller';
import { validateRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validators';

const pingRouter = express.Router();

pingRouter.get('/', validateRequestBody(pingSchema),pingHandler); 
pingRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});


export default pingRouter;