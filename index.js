import express from 'express';
const app=express();
import {MongoClient} from 'mongodb';
import dotenv from "dotenv"

import {movierouter}  from "./routers/movie.js"
dotenv.config({path:'./.env'});
app.use(express.json())
const port=process.env.PORT||8000
  const MONGO_URL=process.env.MONGO_URL;

  async function createConnection(){
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongodb Connected");
  return client;
}

export const client = await createConnection();



app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use('/movies',movierouter)


app.listen(port,()=>console.log("server is started"))
