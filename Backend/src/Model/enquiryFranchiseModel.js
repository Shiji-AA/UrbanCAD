import mongoose from 'mongoose';

const franchiseenquirySchema = new mongoose.Schema(
    {
        franchisename: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            minlength: [3, 'Name must be at least 3 characters long'],
        },
        franchisephone: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true,
            validate: {
                validator: (v) => /^\d{10}$/.test(v),
                message: (props) => `${props.value} is not a valid phone number!`,
            },
        },
        franchiseemail: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            unique: true, 
            match: [
                /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                'Please enter a valid email address',
            ],
        },
        isQualified: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);



const FranchiseEnquiry = mongoose.model('FranchiseEnquiry', franchiseenquirySchema);
export default FranchiseEnquiry;
