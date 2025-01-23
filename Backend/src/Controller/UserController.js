import Enquiry from '../Model/enquiryModel.js';

// Add a new enquiry
 const addEnquiry = async (req, res) => {
    try {
        const { name, phone, email } = req.body;

        // Validate the request body
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

        res.status(201).json({ message: 'Enquiry saved successfully' });
    } catch (error) {
        console.error('Error saving enquiry:', error);
        res.status(500).json({ message: 'Error in saving enquiry' });
    }
};
export { addEnquiry};