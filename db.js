const mongoose=require("mongoose");
mongoose.set("strictQuery",false); //making the strictquery false

mongoose.connect(process.env.urlconnect)//connecting to mongodb atlas
const connection=mongoose.connection; 

connection.on("open",()=>{
    console.log("dbconnected")
})