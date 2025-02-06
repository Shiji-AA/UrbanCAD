import { useFormik } from 'formik';
import { useState } from 'react';
import { axiosInstance } from '../../../api/axiosInstance';
import bluegray from '../../../assets/certificates/bluegray2.jpg'; // Make sure the path is correct

function ContactForm1() {
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const validate = (values) => {
    const errors = {};
    if (!values.franchisename) {
      errors.franchisename = 'Franchise name is required';
    } else if (values.franchisename.length < 3) {
      errors.franchisename = 'Franchise name must be at least 3 characters';
    }

    if (!values.franchiseemail) {
      errors.franchiseemail = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.franchiseemail)) {
      errors.franchiseemail = 'Invalid email address';
    }

    if (!values.franchisephone) {
      errors.franchisephone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(values.franchisephone)) {
      errors.franchisephone = 'Phone number must be 10 digits';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      franchisename: '',
      franchiseemail: '',
      franchisephone: '',
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      axiosInstance
        .post('/franchiseenquirydata', values)
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
    <div data-aos="fade-up"
      className="py-10 px-4"
      style={{
        backgroundImage: `url(${bluegray})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="font-heading max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="text-center md:text-center md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold text-navy mb-4 leading-tight">
            Revolutionize <span className='text-aqua pl-3'>Education</span> 
          </h1>
          <h2 className="text-2xl font-bold text-navy mb-6">
            Start your journey with UrbanCAD!
          </h2>
        </div>

        <div data-aos="zoom-in" // Zoom-in effect for image
            data-aos-duration="1000"
        className="md:w-1/2 w-full bg-white p-8 shadow-2xl rounded-lg border-2">
          <form onSubmit={formik.handleSubmit}>
            <div className="w-full mb-6">
              <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Franchise Name
              </label>
              <input
                name="franchisename"
                placeholder="Enter franchise name"
                className="p-3 w-full border-2 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                value={formik.values.franchisename}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.franchisename && formik.errors.franchisename && (
                <div className="text-red-600 text-sm mt-1">{formik.errors.franchisename}</div>
              )}
            </div>

            <div className="w-full mb-6">
              <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Phone
              </label>
              <input
                name="franchisephone"
                placeholder="Enter your phone number"
                className="p-3 w-full border-2 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                value={formik.values.franchisephone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.franchisephone && formik.errors.franchisephone && (
                <div className="text-red-600 text-sm mt-1">{formik.errors.franchisephone}</div>
              )}
            </div>

            <div className="w-full mb-6">
              <label className="font-bold text-gray-800 text-sm leading-8 uppercase">
                <span className="text-red-400 mr-1">*</span> Email
              </label>
              <input
                name="franchiseemail"
                placeholder="Enter your email"
                className="p-3 w-full border-2 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                value={formik.values.franchiseemail}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.franchiseemail && formik.errors.franchiseemail && (
                <div className="text-red-600 text-sm mt-1">{formik.errors.franchiseemail}</div>
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
              className="w-full py-3 bg-aqua text-white font-bold text-lg rounded-lg shadow-lg hover:bg-navy focus:ring-2 focus:ring-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm1;
