import express from "express";
import { addFood,foodById,listFood,removeFood } from "../controllers/foodController.js";
import multer from "multer";
import authDonor from "../middlewares/authDonor.js";

const foodRouter=express.Router();

// Image storage Engine
const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood) // authDonor
foodRouter.get("/list",listFood)
foodRouter.get("/id",foodById)
foodRouter.post("/remove",removeFood) //authDonor


export default foodRouter;