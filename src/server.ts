import express from 'express';
import { serverconfig } from './config';
import v1Router from './routers/v1router/index.router';
import v2Router from './routers/v2router/index.router';

const app = express();
app.use(express.json())


app.use('/api/v1',v1Router)
app.use('/api/v2',v2Router)

app.listen(serverconfig.PORT, () => {
    console.log(`Server is running `);
    console.log(`Press Ctrl+C to stop the server`);
});