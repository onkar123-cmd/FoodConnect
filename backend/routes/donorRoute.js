import express from "express"
import { isDonorAuth, loginDonor, registerDonor } from "../controllers/donorController.js"
import authDonor from "../middlewares/authDonor.js"

const donorRouter=express.Router()

donorRouter.post("/register",registerDonor)
donorRouter.post("/login",loginDonor)
donorRouter.get('/is-auth',authDonor,isDonorAuth)

export default donorRouter;