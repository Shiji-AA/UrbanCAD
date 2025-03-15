import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../../../api/axiosInstance';
import axios from 'axios';
import bluegray from '../../../assets/certificates/bluegray2.jpg';

function ContactForm() {
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');

console.log(selectedState)

  useEffect(() => {
       axios.get('/statesAndDistricts.json')
      .then(response => {      
        setStates(response.data.states);
      })
      .catch(error => console.error('Error fetching states:', error));
  }, []);


  const handleStateChange = (e) => {
    const stateName = e.target.value;
    setSelectedState(stateName);
    
    // Find and set the districts for the selected state
    const state = states.find((s) => s.state === stateName);
    setDistricts(state ? state.districts : []);
    
    // Update formik state
    formik.setFieldValue('state', stateName);
    formik.setFieldValue('district', '');
  };

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Name is required';
    else if (values.name.length < 3) errors.name = 'Name must be at least 3 characters';

    if (!values.email) errors.email = 'Email is required';
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address';

    if (!values.phone) errors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(values.phone)) errors.phone = 'Phone number must be 10 digits';

    if (!values.state) errors.state = 'State is required';
    if (!values.district) errors.district = 'District is required';
    if (!values.location) errors.location = 'Location is required';

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      location: '',
      state: '',
      district: '',
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

<div data-aos="fade-up" className="bg-[#404040] bg-opacity-60 "

style={{
  backgroundImage: `url(${bluegray})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}}>
 <div className="  py-10 font-syn max-w-screen-2xl mx-auto flex justify-center items-center space-x-1 flex-wrap  bg-[#282828] bg-opacity-70">

    {/* First part - Heading */}
    <div className="w-full sm:w-1/2 text-left sm:text-center mb-6 sm:mb-0">
  <h1 className="text-2xl sm:text-4xl font-bold text-white mb-3 sm:mb-4 leading-snug sm:leading-tight">
    Revolutionize <span className="text-aqua pl-1 sm:pl-3">Education</span>
  </h1>
  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
    Start your journey with UrbanCAD!
  </h2>
</div>



    {/* Second and third parts - Form */}
    <div className="w-full sm:w-2/3  p-5 shadow-2xl rounded-lg  ">
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {/* Name Field */}
          <div className="w-full mb-4">
            <label className="font-bold text-white text-sm leading-8 uppercase">
              <span className="text-aqua mr-1">*</span> Name
            </label>
            <input
              name="name"
              placeholder="Enter your name"
              className="p-3 w-full border-2 rounded-lg text-white shadow-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-teal-400 "
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-aqua text-sm mt-1">{formik.errors.name}</div>
            )}
          </div>

          {/* Phone Field */}
          <div className="w-full mb-4">
            <label className="font-bold text-white text-sm leading-8 uppercase">
              <span className="text-aqua mr-1">*</span> Phone
            </label>
            <input
              name="phone"
              placeholder="Enter your phone number"
              className="p-3 w-full border-2 rounded-lg text-white shadow-lg bg-transparent focus:outline-none focus:ring-1 focus:ring-teal-400"
              value={formik.values.phone}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-aqua text-sm mt-1">{formik.errors.phone}</div>
            )}
          </div>

          {/* Email Field */}
          <div className="w-full mb-4">
            <label className="font-bold text-white text-sm leading-8 uppercase">
              <span className="text-aqua mr-1">*</span> Email
            </label>
            <input
              name="email"
              placeholder="Enter your email"
              className="p-3 w-full border-2 rounded-lg text-white shadow-lg  bg-transparent focus:outline-none focus:ring-1 focus:ring-teal-400"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-aqua text-sm mt-1">{formik.errors.email}</div>
            )}
          </div>


   {/* State */}
   <div className="w-full mb-4">
        <label className="font-bold text-white text-sm uppercase"><span className="text-aqua mr-1">*</span>State </label>
        <select
          name="state"
          className="p-3.5 w-full border-2 rounded-lg text-gray-500 shadow-lg  bg-transparent focus:outline-none focus:ring-1 focus:ring-teal-400"
          value={formik.values.state}
          onChange={handleStateChange}
        >
          <option value="">Select State</option>
          {states?.length > 0 && states.map((state, index) => (
            <option key={index} value={state.state}>{state.state}</option>
          ))}
        </select>
      </div>


      {/* District */}
      <div className="w-full mb-4">
        <label className="font-bold text-white text-sm uppercase"> <span className="text-aqua mr-1">*</span>District </label>
        <select
          name="district"
          className="p-3.5 w-full border-2 rounded-lg text-gray-500 shadow-lg  bg-transparent focus:outline-none focus:ring-1 focus:ring-teal-400 "
          value={formik.values.district}
          onChange={formik.handleChange}
        >
          <option value="">Select District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>{district}</option>
          ))}
        </select>
      </div>



  {/* Location */}
  <div className="w-full mb-4">
        <label className="font-bold text-white text-sm uppercase"> <span className="text-aqua mr-1">*</span> Locality </label>
        <input
          name="location"
          placeholder="Enter your locality"
          className="p-3 w-full border-2 rounded-lg text-white shadow-lg  bg-transparent focus:outline-none focus:ring-1 focus:ring-teal-400"
          value={formik.values.location}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.touched.location && formik.errors.location && <div className="text-aqua text-sm">{formik.errors.location}</div>}
      </div>

   



        </div>

        {submitMessage && (
          <div className="text-green-700 bg-green-200 text-lg mb-4 p-2 rounded-md">{submitMessage}</div>
        )}
        {submitError && (
          <div className="text-aqua text-lg mb-4 p-2 rounded-md bg-aqua-100">{submitError}</div>
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

export default ContactForm;
