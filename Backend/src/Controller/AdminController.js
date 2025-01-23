import Enquiry from "../Model/enquiryModel.js";
import User from "../Model/userModel.js";
import generateToken from "../Utils/generateToken.js"
import jwt from 'jsonwebtoken';



const adminRegister = async (req, res) => {
    const { name, email, password } = req.body;
 
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
      }

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: "User already exists" });
        }

        const user = await User.create({
            name,
            email,
            password
        });

        if (user) {
            res.status(201).json({
                id: user._id,
                name: user.name,
                email: user.email,
                message: "User registered successfully"
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

const adminLogin = async (req, res) => {
    try {
      const { email, password } = req.body;  
       
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({error: "User does not exist."});
      }
      if (user.status === 'blocked') {
        return res.status(403).json({ error: "Your account has been blocked." }); 
      }
      if (await user.matchPassword(password)) {
        const userData = {
          name: user.name,
          email: user.email,
          id: user.id,
        };
       
        const token = generateToken(user?.id);       
        return res.json({
          userData,
          token,
          message: "Login successful",
        });
      } else {
        return res.status(401).json({error: "Incorrect-password."});
      }
    } catch (error) {
      return res
        .status(500)
        .json({error: "An error occurred. Please try again later." });
    }
  };


  const enquiryData = async (req, res) => {
    try {
        const enquiryData = await Enquiry.find();     
        res.status(200).json(enquiryData); 
    } catch (error) {
        res.status(500).json({ message: 'Error fetching enquiry data', error: error.message });
    }
};


export { adminRegister ,adminLogin,enquiryData};