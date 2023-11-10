const mongoose=require('mongoose');

const bookingschema=mongoose.Schema({
     email:{
        type:String,
        require:true,
     },
     name:{
        type:String,
        require:true
     },
     modelName:{
        type:String,
        required:true,
     },
     appointmentDate:{
        type:Date,
        required:true
     },
     phonenum:{
        type:Number,
        required:true
     },
     kmDriven:{
        type:String,
        required:true
     },
     serviceType:{
      type:String,
      required:true
     },
     serviceDescription:{
      type:String,
      required:true
     },
     bookingStatus:{
        type:String,
        default:"Pending"
     },
     serviceStatus:{
        type:String,
        default:"Not Initiated"
     },
     expectedDelivery:{
        type:Date
     }
},{
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at' 
    }
  });

const booking=mongoose.model("Booking",bookingschema);
module.exports=booking;