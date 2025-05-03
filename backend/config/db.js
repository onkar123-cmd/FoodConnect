import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://onkarhui:987654321@cluster0.9kzg6.mongodb.net/food').then(()=>console.log("DB Connected"));
}

export default connectDB;