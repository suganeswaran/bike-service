const express=require("express"); 
const { signup, login, logout } = require("../Controller/authcontroller");
const router=express.Router();
router.post("/sign",signup)
router.post("/login",login)

module.exports=router;

// Only for auth api calls