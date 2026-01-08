import { pingHandler } from "../../controller/ping.controller";
import express from "express";


const pingRouter = express.Router()
pingRouter.get('/',pingHandler);
pingRouter.get('/health',(req,res)=>{
    res.status(200).send('OK')
}) 
export default pingRouter;

