import Enquiry from '../Model/enquiryModel.js';
const addEnquiry = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    if (!name || !phone || !email) {
      return res.status(400).json({ message: 'All fields are required' });
    }   
    const newEnquiry = new Enquiry({
      name,
      phone,
      email,
    });

    await newEnquiry.save();
    res.status(201).json({ message: 'Enquiry saved successfully' });
  } 
  catch (error) {
    console.error('Error handling enquiry:', error);
    res.status(500).json({ message: 'Error in saving enquiry ' });
  }
};

export { addEnquiry };
