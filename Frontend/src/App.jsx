import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the AOS styles
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/User/HomePage';
import Electrical from './Components/Users/Cources/Electrical';
import Mechanical from './Components/Users/Cources/Mechanical';
import DataScience from './Components/Users/Cources/DataScience';
import AdminLogin from './Components/Admin/AdminLogin';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminRegister from './Components/Admin/AdminRegister';
import AdminEnquiryData from './Components/Admin/AdminEnquiryData';
import AboutUs from './Components/Users/AboutUs/AboutUs';
import Civil from "./Components/Users/Cources/Civil";
import Franchise from "./Components/Users/Franchise/Franchise";

function App() {
  // Initialize AOS for global animations
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Set duration of animation
      easing: "ease-in-out", // Easing type for smooth animation
      once: true,  // Make sure the animation happens only once
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen overflow-x-hidden bg-gray-100">
      <Toaster position="top-right" />
      <Routes>
        {/* UserSide */}
        <Route path="/" element={<HomePage />} />
        <Route path="/civil" element={<Civil />} />
        <Route path="/electrical" element={<Electrical />} />
        <Route path="/mechanical" element={<Mechanical />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/franchise" element={<Franchise />} />

        {/* AdminSide */}
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/enquirydata" element={<AdminEnquiryData />} />
      </Routes>

      </div>
     
    </Router>
  );
}

export default App;
