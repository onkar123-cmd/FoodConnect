import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"
import donorRouter from "./routes/donorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app=express()
const port=process.env.PORT || 4000

// Allow multiple origin
const allowedOrigins=['https://food-connect-frontend.vercel.app']

// middleware
app.use(express.json())
app.use(cors(
    {
        origin: allowedOrigins,
        methods: ["POST", "GET"],
        credentials: true
    }
)) // {origin: allowedOrigins, credentials: true}

// db connection
connectDB();

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/donor",donorRouter)
app.use("/api/admin",adminRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

// mongodb+srv://onkarhui:987654321@cluster0.9kzg6.mongodb.net/?
