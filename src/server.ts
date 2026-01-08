import Express = require("express");

const app = Express();

const PORT:number = 3000;
app.get('/ping',(req,res)=>{
    res.send('PONG')
})

app.listen(PORT,()=>{
    console.log(`server is listening on the port ${PORT}`);
})