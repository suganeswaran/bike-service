const express=require("express");
const { bookService,getUserServices,getAllBookings,removeUserServices,updateService } = require("../Controller/bookingController");
const router=express.Router();
router.post("/new",bookService)
router.post("/myservices",getUserServices)
router.post("/remove",removeUserServices)
router.put("/update",updateService)
router.get("/all",getAllBookings)

module.exports=router;

// only for service related api calls