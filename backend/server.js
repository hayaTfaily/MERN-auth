import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notfound,errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
dotenv.config();
const port=process.env.PORT | 5000;

import userRoutes from './routes/userRoutes.js'

connectDB();

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use('/api/users',userRoutes)

app.get("/",(req,res)=>res.send("Hello World!"))  //route aal index

app.use(notfound)
app.use(errorHandler)

app.listen(5000,()=>console.log(`Server running on port ${port}`))