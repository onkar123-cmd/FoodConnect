import express from "express"
import { listOrders, placeOrder, updateStatus, userOrders } from "../controllers/orderController.js"
import authUser from "../middlewares/authUser.js";

const orderRouter=express.Router();

orderRouter.post("/place",authUser,placeOrder)
orderRouter.post("/userorders",authUser,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",updateStatus)

export default orderRouter;