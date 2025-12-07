import express from 'express';
import { pinghandler } from '../../controller/pingcontroller';

const pingRouter = express.Router();

pingRouter.get('/', pinghandler); 
pingRouter.get('/health', (req, res) => {
    res.status(200).send('OK');
});


export default pingRouter;