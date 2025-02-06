import express from "express"
import { addEnquiry, addFranchiseEnquiry } from "../Controller/UserController.js"

 const router= express.Router()

 router.post('/enquirydata',addEnquiry)
 router.post('/franchiseenquirydata',addFranchiseEnquiry)

export default router