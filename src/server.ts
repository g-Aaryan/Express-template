import express from 'express';
import { serverconfig } from './config';
import v1router from './router/v1/index.router';
import v2router from './router/v2/index.router';
import { genericErrorHandler } from './middlewares/error.middleware';
const app = express();

app.use(express.json());


app.use('/api/v1',v1router)
app.use('/api/v2',v2router)

app.use(genericErrorHandler);


app.listen(serverconfig.PORT,()=>{
    console.log(`server is listening on the port ${serverconfig.PORT}`);
})