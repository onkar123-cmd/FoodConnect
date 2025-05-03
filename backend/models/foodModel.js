import mongoose from "mongoose";

const foodSchema=new mongoose.Schema({
    Dname: {type:String,required:true},
    Dadd: {type:String,required:true},
    name: {type:String,required:true},
    description: {type:String,required:true},
    image: {type:String,required:true},
    category: {type:String,required:true}
})

const foodModel=mongoose.models.food || mongoose.model("food",foodSchema);

export default foodModel;