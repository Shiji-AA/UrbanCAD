import Enquiry from '../Model/enquiryModel.js';
import nodemailer from 'nodemailer'; 
import dotenv from 'dotenv';
dotenv.config();


console.log(process.env.EMAIL,"Email")
// Add a new enquiry
const addEnquiry = async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    // Validation: Ensure all fields are provided
    if (!name || !phone || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Save the enquiry to the database
    const newEnquiry = new Enquiry({
      name,
      phone,
      email,
    });

    await newEnquiry.save();

    // Send an email notification about the new enquiry
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",  // Hostinger SMTP server
      port: 587,  // SMTP port (587 for TLS)
      secure: false,  // Use TLS
      auth: {
        user: process.env.EMAIL,  // Your Hostinger email
        pass: process.env.PASSWORD,  // Your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL,  // Your Hostinger email
      to: "info@urbancad.in",  // The email where the enquiry should be sent
      subject: "New Enquiry Received",
      html: `
        <h2>New Enquiry Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Enquiry saved and email sent successfully' });

  } catch (error) {
    console.error('Error handling enquiry:', error);
    res.status(500).json({ message: 'Error in saving enquiry or sending email' });
  }
};

export { addEnquiry };
