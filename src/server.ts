import express from 'express';
import { serverconfig } from './config';
import v1router from './router/v1/index.router';
import v2router from './router/v2/index.router';
const app = express();


app.use('/api/v1',v1router)
app.use('/api/v2',v2router)

app.listen(serverconfig.PORT,()=>{
    console.log(`server is listening on the port ${serverconfig.PORT}`);
})