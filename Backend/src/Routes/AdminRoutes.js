import express from "express";
import { adminLogin, adminRegister, enquiryData } from "../Controller/AdminController.js"
const adminRouter = express.Router();



adminRouter.post('/adminregister' , adminRegister)
adminRouter.post('/admin' , adminLogin)
adminRouter.get('/enquirydata' , enquiryData)
export default adminRouter