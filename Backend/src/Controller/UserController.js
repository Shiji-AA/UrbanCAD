import Enquiry from "../Model/enquiryModel.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const addEnquiry = async (req, res) => {
  try { 
    const { name, phone, email } = req.body;

    if (!name || !phone || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newEnquiry = new Enquiry({ name, phone, email });
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
      subject: "New Enquiry Received",     
      text: `You have received a new enquiry.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`,  
      html: `<h3>You have received a new enquiry.</h3>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Email:</strong> ${email}</p>`, 
    };
    
    let info = await transporter.sendMail(mailOptions);
    //console.log("Email sent:", info.response);  

    res.status(201).json({ message: "Enquiry saved and email sent successfully" });
  } catch (error) {
    console.error("Error in handling enquiry or sending email:", error);
    res.status(500).json({ message: "Error in saving enquiry or sending email" });
  }
};

export { addEnquiry };
