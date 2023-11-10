const express=require("express");
require("dotenv").config() 
const routes=require('./Routes');
require('./db');
const cookieParser = require("cookie-parser"); 
var cors = require('cors')


const app=express();

app.use(cookieParser());
// making use of cookieparse
app.use(express.json());
app.use(
    cors({
      credentials: true,
      origin: [ "http://localhost:3000"],
    })
  );// importing  express.json
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use("/",routes);

const port=process.env.portnum

app.listen(port,()=>{
    console.log("connected")
})
// making the server to listen in port number 5050
