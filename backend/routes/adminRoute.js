import express from "express"
import { adminLogin, listDonor, listReceiver, removeDonor } from "../controllers/adminController.js"

const adminRouter=express.Router()

adminRouter.post('/login',adminLogin)
adminRouter.get('/dlist',listDonor)
adminRouter.get('/rlist',listReceiver)
adminRouter.post('/remove',removeDonor)

export default adminRouter