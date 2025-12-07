import dotenv from 'dotenv'

function loadenv(){
    dotenv.config();
    console.log("variables loaded")
}

type Serverconfig={
    PORT:number
}

loadenv();

export const serverconfig : Serverconfig = {
    PORT : Number(process.env.PORT)|| 3000
}
