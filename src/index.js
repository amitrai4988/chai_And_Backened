// require('dotenv').config({path : './env'})
import dotenv from "dotenv"
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';

dotenv.config({
    path:'./env'
})




/*
import express from 'express';
const app = express();
(async()=>{
    try{
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("ERROR :",(err)=>{
        console.log("ERROR :",err);
        throw err;
      })
      app.listen(process.env.PORT,()=>{
        console.log(`App listening on ${process.env.PORT}`);
      })
    }catch(err){
        console.error("Error: ",err)
        throw err
    }
})()
    */
connectDB()