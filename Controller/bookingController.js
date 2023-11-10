const { sendMail } = require("../Helper/mail");
const Booking=require("../Models/Booking")
exports.bookService=async(req,res)=>{
    try{
        const booking=await Booking.create({...req.body});
        sendMail("suganeswarann7677@gmail.com","New Service Request",`${booking.name} has made a service request on ${booking.appointmentDate} for ${booking.modelName} Bike`)
        return res.status(200).json({message:"Booking Completed"})
    }
    catch(error){
      return res.status(500).json({message:"Failed to Book",error})
    }
}
exports.getUserServices=async(req,res)=>{
    try{
        const {email}=req.body;
        const services=await Booking.find({email});
        return res.status(200).json({services});
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"Failed to Book",error})

    }
}

exports.getAllBookings=async(req,res)=>{
    try{
        const services=await Booking.find();
        return res.status(200).json({services});

    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"Failed to Book",error})

    }
}

exports.removeUserServices=async(req,res)=>{
    try{
        console.log("hit");
        const {ids}=req.body;
        await Booking.deleteMany({ _id: { $in: ids } })
        return res.status(200).json({message:"Successfully Deleted"});

    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"Failed to Delete",error})

    }
}

exports.updateService=async(req,res)=>{
    try{
        const {data,_id,email}=req.body;
        await Booking.updateOne({_id},data);
        if(data.serviceStatus==="Completed")
            sendMail(email,"Service Completed","Your Vehicle service is completed and out for delivery");
        return res.status(200).json({message:"Successfully Updated"});
    }
    catch(error){
        console.log(error)
        return res.status(500).json({message:"Failed to Update",error})

    }
}