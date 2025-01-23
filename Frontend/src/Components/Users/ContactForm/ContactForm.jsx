import { useFormik } from 'formik';
import { useState } from 'react';
import { axiosInstance } from '../../../api/axiosInstance';

function ContactForm() {
    // State to store success or error messages
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState('');

    // Validation function
    const validate = (values) => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Name is required';
        } else if (values.name.length < 3) {
            errors.name = 'Name must be at least 3 characters';
        }

        if (!values.email) {
            errors.email = 'Email is required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        if (!values.phone) {
            errors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(values.phone)) {
            errors.phone = 'Phone number must be 10 digits';
        }

        return errors;
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            axiosInstance
                .post('/enquirydata', values)
                .then((response) => {
                    setSubmitMessage(response.data.message || 'Form submitted successfully!');
                    setSubmitError(''); // Clear any previous error
                    resetForm();
                     // Clear the form
                      // Automatically clear the success message after 2 seconds
                    setTimeout(() => {
                        setSubmitMessage('');
                    }, 1000);
                   
                })
                .catch((error) => {
                    setSubmitError(error.response?.data?.message || 'Failed to submit form');
                    setSubmitMessage(''); // Clear any previous success message
                    setTimeout(() => {
                        setSubmitError('');
                    }, 1000);
                });
        },
    });

    return (
        <div className="bg-navy text-white py-10 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-semibold text-aqua">
                        Taking on the Arcite-World with 95% Success
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-white mt-4">
                        Apply to explore opportunities!!!!!!
                    </h2>
                </div>

                <div className="md:w-1/2 w-full bg-white p-8 shadow-lg rounded-lg">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="w-full mb-4">
                            <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> Name
                            </label>
                            <input
                                name="name"
                                placeholder="Enter your name"
                                className="p-2 w-full border rounded text-gray-800"
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
                            )}
                        </div>

                        <div className="w-full mb-4">
                            <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> Phone
                            </label>
                            <input
                                name="phone"
                                placeholder="Enter your phone number"
                                className="p-2 w-full border rounded text-gray-800"
                                value={formik.values.phone}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <div className="text-red-600 text-sm mt-1">{formik.errors.phone}</div>
                            )}
                        </div>

                        <div className="w-full mb-6">
                            <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> Email
                            </label>
                            <input
                                name="email"
                                placeholder="Enter your email"
                                className="p-2 w-full border rounded text-gray-800"
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
                            )}
                        </div>

                        {/* Inline success or error message */}
                        {submitMessage && (
                            <div className="text-green-700  bg-yellow-200 text-lg mb-4">{submitMessage}</div>
                        )}
                        {submitError && (
                            <div className="text-red-600 text-lg mb-4">{submitError}</div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3 bg-aqua text-navy font-bold text-lg rounded-md shadow-md hover:bg-yellow-400 transition-all"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
