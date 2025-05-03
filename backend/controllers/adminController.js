import jwt from "jsonwebtoken"
import donorModel from "../models/donorModel.js"
import userModel from "../models/userModel.js";

// Login admin
const adminLogin=async(req,res)=>{
    try {
        const {email,password}=req.body
        if(password===process.env.ADMIN_PASSWORD && email===process.env.ADMIN_EMAIL){
            const token=jwt.sign({email}, process.env.JWT_SECRET) // , {expiresIn: '7d'}
            return res.json({success:true, token})
        }else{
            return res.json({success:false, message: "Invalid Credential"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// all donor list
const listDonor=async(req,res)=>{
    try {
        const donors=await donorModel.find({})
        res.json({success:true,data:donors})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// all receiver list
const listReceiver=async(req,res)=>{
    try {
        const receivers=await userModel.find({})
        res.json({success:true,data:receivers})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// Remove Donor
const removeDonor=async(req,res)=>{
    try {
        const donor=await donorModel.findById(req.body.id)
        await donorModel.findByIdAndDelete(req.body.id)
        res.json({success:true,message:"Donor Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {listDonor,removeDonor,listReceiver,adminLogin}