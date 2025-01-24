import { useFormik } from 'formik';
import { useState } from 'react';
import { axiosInstance } from '../../../api/axiosInstance';

function ContactForm() {
    const [submitMessage, setSubmitMessage] = useState('');
    const [submitError, setSubmitError] = useState('');

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
                    setSubmitError('');
                    resetForm();
                    setTimeout(() => {
                        setSubmitMessage('');
                    }, 1000);
                })
                .catch((error) => {
                    setSubmitError(error.response?.data?.message || 'Failed to submit form');
                    setSubmitMessage('');
                    setTimeout(() => {
                        setSubmitError('');
                    }, 1000);
                });
        },
    });

    return (
        <div className="bg-gradient-to-r from-teal-500 to-purple-500 py-10 px-4">
            <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Revolutionize Education</h1>
                    <h2 className="text-xl md:text-2xl font-medium text-white mb-6">Start your journey with UrbanCAD!</h2>
                    <p className="text-white text-lg">We're excited to hear from you. Fill out the form below to get started!</p>
                </div>

                <div className="md:w-1/2 w-full bg-white p-8 shadow-2xl rounded-lg">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="w-full mb-6">
                            <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> Name
                            </label>
                            <input
                                name="name"
                                placeholder="Enter your name"
                                className="p-3 w-full border-2 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.name && formik.errors.name && (
                                <div className="text-red-600 text-sm mt-1">{formik.errors.name}</div>
                            )}
                        </div>

                        <div className="w-full mb-6">
                            <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                                <span className="text-red-400 mr-1">*</span> Phone
                            </label>
                            <input
                                name="phone"
                                placeholder="Enter your phone number"
                                className="p-3 w-full border-2 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
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
                                className="p-3 w-full border-2 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
                            )}
                        </div>

                        {submitMessage && (
                            <div className="text-green-700 bg-green-200 text-lg mb-4 p-2 rounded-md">{submitMessage}</div>
                        )}
                        {submitError && (
                            <div className="text-red-600 text-lg mb-4 p-2 rounded-md bg-red-100">{submitError}</div>
                        )}

                        <button
                            type="submit"
                            className="w-full py-3 bg-gradient-to-r from-teal-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-700 focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
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
