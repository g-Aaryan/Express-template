import express from 'express';
import { pinghandler } from '../../controller/pingcontroller';
import { validateRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validators';

const pingRouter = express.Router();

pingRouter.get('/', validateRequestBody(pingSchema),pinghandler); 
pingRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});


export default pingRouter;