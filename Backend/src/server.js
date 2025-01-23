import express from  'express';
import cors from "cors";
import dotenv from 'dotenv';
import UserRoutes from './Routes/UserRoutes.js'
import { connectDB } from './config/db.js';
import adminRouter from './Routes/AdminRoutes.js';

dotenv.config()
connectDB()

const app= express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use('/api/users',UserRoutes)
app.use('/api/admin',adminRouter);
app.get('/',(req,res)=>res.send("server is ready"))
const port= process.env.PORT||3000

app.listen(port,()=>
console.log("server started"))