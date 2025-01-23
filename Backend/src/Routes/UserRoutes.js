import express from "express"
import { addEnquiry } from "../Controller/UserController.js"

 const router= express.Router()

 router.post('/enquirydata' , addEnquiry)

export default router