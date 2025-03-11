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
          }, 2000);
        })
        .catch((error) => {
          setSubmitError(error.response?.data?.message || 'Failed to submit form');
          setSubmitMessage('');
          setTimeout(() => {
            setSubmitError('');
          }, 2000);
        });
    },
  });

  return (
    <>
      <div data-aos="fade-up" className="py-10 px-2 border border-gray-100 bg-black  bg-opacity-90"
        style={{
          backgroundImage: `url(${bluegray})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="font-body max-w-screen-lg mx-auto flex justify-center items-center space-x-1 flex-wrap">
          {/* Heading Section */}
          <div className="w-full sm:w-1/2 text-left sm:text-center mb-6 sm:mb-0">
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-snug sm:leading-tight">
              Revolutionize <span className="text-aqua pl-1 sm:pl-3">Education</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Start your journey with UrbanCAD!
            </h2>
          </div>

          {/* Form Section */}
          <div className="w-full sm:w-2/3 bg-transparent p-5 shadow-2xl rounded-lg ">
            <form onSubmit={formik.handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                
                {/* Franchise Name Field */}
                <div className="w-full mb-4">
                  <label className="font-bold text-white text-sm leading-8 uppercase">
                    <span className="text-teal-400 mr-1">*</span> Franchise Name
                  </label>
                  <input
                    name="franchisename"
                    placeholder="Enter your franchise name"
                    className=" bg-transparent p-3 w-full border-2 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={formik.values.franchisename}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.franchisename && formik.errors.franchisename && (
                    <div className="text-teal-400 text-sm mt-1">{formik.errors.franchisename}</div>
                  )}
                </div>

                {/* Phone Field */}
                <div className="w-full mb-4">
                  <label className="font-bold text-white text-sm leading-8 uppercase">
                    <span className="text-teal-400 mr-1">*</span> Phone
                  </label>
                  <input
                    name="franchisephone"
                    placeholder="Enter your phone number"
                    className=" bg-transparent p-3 w-full border-2 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={formik.values.franchisephone}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.franchisephone && formik.errors.franchisephone && (
                    <div className="text-teal-400 text-sm mt-1">{formik.errors.franchisephone}</div>
                  )}
                </div>

                {/* Email Field */}
                <div className="w-full mb-4">
                  <label className="font-bold text-white text-sm leading-8 uppercase">
                    <span className="text-teal-400 mr-1">*</span> Email
                  </label>
                  <input
                    name="franchiseemail"
                    placeholder="Enter your email"
                    className=" bg-transparent p-3 w-full border-2 rounded-lg text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
                    value={formik.values.franchiseemail}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                  />
                  {formik.touched.franchiseemail && formik.errors.franchiseemail && (
                    <div className="text-teal-400 text-sm mt-1">{formik.errors.franchiseemail}</div>
                  )}
                </div>
              </div>

              {/* Submission Messages */}
              {submitMessage && (
                <div className="text-green-700 bg-green-200 text-lg mb-4 p-2 rounded-md">{submitMessage}</div>
              )}
              {submitError && (
                <div className="text-teal-600 text-lg mb-4 p-2 rounded-md bg-teal-100">{submitError}</div>
              )}

            {/* Centering the Submit Button */}
  <div className="flex justify-center mt-6">
  <button
    type="submit"
    className="w-[400px] items-center py-3 bg-transparent text-white font-bold text-lg rounded-lg shadow-lg border-2 border-white hover:bg-white hover:text-navy focus:ring-2 focus:ring-white transition-all duration-300 transform hover:scale-105"
  >
    Submit
  </button>
</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactForm1;
