import express from "express"
import { isAuth, loginUser,registerUser } from "../controllers/userController.js"
import authUser from "../middlewares/authUser.js"

const userRouter=express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.get('/is-auth',authUser,isAuth)

export default userRouter;