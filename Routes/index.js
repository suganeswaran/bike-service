const express=require("express")
const authRoutes=require("./authRoutes");
const bookingRoutes = require("./bookingRoutes");


const router=express.Router();

router.use("/auth",authRoutes)
router.use("/book",bookingRoutes)



module.exports=router

