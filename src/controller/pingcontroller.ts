import { Request } from "express";
import { Response } from "express";

export const pinghandler = (req: Request,res: Response)=>{
    res.send('pong');
}