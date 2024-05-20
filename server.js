import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config.js'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// app config
const app = express()
const port = process.env.PORT


//middleware
app.use(express.json()) // whenever we get request from the frontend - that will be passed using this
app.use(cors()) // to access front to back

//db connection 
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


// To use the uploaded image in the frontend
app.use("/images/",express.static("uploads"))
// If i insert any file in uploads folder - we can access in the front end using : http://localhost:4000/images/imagename

http://localhost:4000/
app.get("/",(req,res)=>{
    res.send("API Working")
})

// To start the express server
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`)
})
