import donorModel from "../models/donorModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

// login donor
const loginDonor=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const donor=await donorModel.findOne({email});

        if(!donor){
            return res.json({success:false,message:"Donor doesn't exists"})
        }

        const isMatch=await bcrypt.compare(password,donor.password)
        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"})
        }
        const token=createToken(donor._id)
        res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register donor
const registerDonor=async(req,res)=>{
    const {name,password,email}=req.body;
    try {
        // checking is donor already exists
        const exists=await donorModel.findOne({email})
        if(exists){
            return res.json({success:false,message:"Donor already exists"})
        }
        // validating email format and strong password
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"})
        }
        if(password.length<8){
            return res.json({success:false,message:"Please enater a strong password"})
        }
        // hashing donor password
        const salt=await bcrypt.genSalt(10)
        const hashedPassword=await bcrypt.hash(password,salt)

        const newDonor=new donorModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const donor=await newDonor.save()
        const token=createToken(donor._id)
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

// Check auth
const isDonorAuth=async(req,res)=>{
    try {
        return res.json({success:true})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {loginDonor,registerDonor,isDonorAuth}