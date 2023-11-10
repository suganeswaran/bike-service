const mongoose=require('mongoose');

const userschema=mongoose.Schema({
     firstname:{
        type:String,
        require:true,
     },
     lastname:{
        type:String,
     },
     email:{
        type:String,
        required:true,
        unique:true
     },
     password:{
        type:String,
        required:true
     },
     phonenum:{
        type:Number,
     },
     gender:{
        type:String,
     },
     dob:{
      type:Date,
      required:true
     },
     isAdmin:{
      type:Boolean,
      default:false
     }
});

const user=mongoose.model("User",userschema);
module.exports=user;