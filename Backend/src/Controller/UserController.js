import Enquiry from "../Model/enquiryModel.js";
import FranchiseEnquiry from "../Model/enquiryFranchiseModel.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const addEnquiry = async (req, res) => {
  try { 
    const { name, phone, email ,location, state, district} = req.body;

    if (!name || !phone || !email || !location || !state || !district) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newEnquiry = new Enquiry({ name, phone, email, location, state, district});
    await newEnquiry.save();

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,   
      port: process.env.SMTP_PORT,                    
      secure: false,                 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,      
      },
    });
   
    let mailOptions = {
      from: "UrbanCAD <info@urbancad.in>", 
      to: "info@urbancad.in",              
      subject: "New Enquiry Received From student",     
      text: `You have received a new enquiry from student.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nLocation: ${location}\nState: ${state}\nDistrict: ${district}`,  
      html: `<h3>You have received a new enquiry from student.</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Location:</strong> ${location}</p>
             <p><strong>State:</strong> ${state}</p>
             <p><strong>District:</strong> ${district}</p>`, 
    };        
    let info = await transporter.sendMail(mailOptions);
    //console.log("Email sent:", info.response);  
    res.status(201).json({ message: "Enquiry saved successfully",info});
  } catch (error) {
    console.error("Error in handling enquiry ", error);
    res.status(500).json({ message: "Error in saving enquiry " });
  }
};


// ADD FRANCHISE ENQUIRY
const addFranchiseEnquiry = async (req, res) => {
  try { 
    const { franchisename, franchisephone, franchiseemail } = req.body;

    if (!franchisename || !franchisephone || !franchiseemail) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newEnquiry = new FranchiseEnquiry({ franchisename, franchisephone, franchiseemail});
    await newEnquiry.save();

    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,   
      port: process.env.SMTP_PORT,                    
      secure: false,                 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,      
      },
    });
    let mailOptions = {
      from: "UrbanCAD <info@urbancad.in>",
      to: "info@urbancad.in",
      subject: "New Franchise Enquiry Received",
      text: `You have received a new enquiry from Franchise.\n\nName: ${franchisename}\nPhone: ${franchisephone}\nEmail: ${franchiseemail}`,  
      html: `<h3>You have received a new enquiry from Franchise.</h3>
             <p><strong>Name:</strong> ${franchisename}</p>
             <p><strong>Phone:</strong> ${franchisephone}</p>
             <p><strong>Email:</strong> ${franchiseemail}</p>`,
    };
          
    let info = await transporter.sendMail(mailOptions);
    //console.log("Email sent:", info.response);  
    res.status(201).json({ message: "Enquiry saved successfully",info});
  } catch (error) {
    console.error("Error in handling enquiry ", error);
    res.status(500).json({ message: "Error in saving enquiry " });
  }
};

export { addEnquiry , addFranchiseEnquiry };
