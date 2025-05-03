import foodModel from "../models/foodModel.js";
import fs from 'fs'

// add food item
const addFood=async(req,res)=>{
    let image_filename=`${req.file.filename}`;
    const food=new foodModel({
        Dname:req.body.Dname,
        Dadd:req.body.Dadd,
        name:req.body.name,
        description:req.body.description,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

// all food list
const listFood=async(req,res)=>{
    try {
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// get single food
const foodById=async(req,res)=>{
    try {
        const {id}=req.body
        const foods=await foodModel.findById(id);
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// remove food item
const removeFood=async(req,res)=>{
    try {
        const food=await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listFood,removeFood,foodById}