import mongoose from "mongoose"

const donorSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{minimize:false})

const donorModel=mongoose.models.donor || mongoose.model("donor",donorSchema);

export default donorModel;