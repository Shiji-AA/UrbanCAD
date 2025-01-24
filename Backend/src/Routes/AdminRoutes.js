import express from "express";
import { adminLogin, adminRegister, disqualifyUser, enquiryData, qualifyUser } from "../Controller/AdminController.js"
const adminRouter = express.Router();



adminRouter.post('/adminregister' , adminRegister)
adminRouter.post('/admin' , adminLogin)
adminRouter.get('/enquirydata' , enquiryData);
adminRouter.post("/disqualifyuser/:id", disqualifyUser);
adminRouter.post("/qualifyuser/:id",  qualifyUser);
export default adminRouter