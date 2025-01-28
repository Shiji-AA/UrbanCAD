import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faUserGraduate,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import heroimage from "../../../assets/certificates/image6.jpeg";
//import heroimage from '../../../assets/heroimage4.jpg';
import heroimage1 from "../../../assets/heroimage6.jpg";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(50);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 50); // Adjust speed by changing the interval time
    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  return (
    <>
     <div  className="relative bg-navy flex flex-col lg:flex-row items-center justify-center py-12 px-4 md:px-8">
      {/* Left Section */}
      <div className="flex flex-col items-start justify-start h-full w-full lg:w-[48%] bg-gray-800 bg-opacity-20 p-6 md:p-8 lg:p-12 space-y-6">
        <div className="text-left space-y-4">
          {/* Main Headings */}
          <h1 className=" pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-aqua text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
            Build Your Legacy!
          </h1>
          

          <h3
            className="font-body text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed hover:text-blue-500 transform transition-all duration-500 hover:scale-110 hover:translate-y-2"
            style={{
              textShadow: "0 0 5px white, 0 0 10px blue, 0 0 15px blue",
            }}
          >
            Empowering Education, Enabling Entrepreneurship!!
          </h3>

          {/* Features Section */}
          <div  className="flex flex-col sm:flex-row justify-between items-center sm:space-x-6 lg:space-x-8 border-t-2 border-aqua pt-8 pb-6 space-y-6 sm:space-y-0">
            {/* Feature 1 */}
            <div data-aos="fade-up" className="flex items-center text-left space-x-4">
              <FontAwesomeIcon icon={faAward} size="3x" color="aqua" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {count}+
                </div>
                <p className="text-white font-body text-sm md:text-base font-medium mt-1">
                  Years of Excellence
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div  data-aos="fade-up" className="flex items-center text-left space-x-4">
              <FontAwesomeIcon icon={faUserGraduate} size="3x" color="aqua" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {count}+
                </div>
                <p className="text-white font-body text-sm md:text-base font-medium mt-1">
                  Students Trained
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div data-aos="fade-up" className="flex items-center text-left space-x-4">
              <FontAwesomeIcon icon={faBookOpen} size="3x" color="aqua" />
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {count}+
                </div>
                <p className="text-white font-body text-sm md:text-base font-medium mt-1">
                  Industrial Courses
                </p>
              </div>
            </div>
          </div>

          <p className="font-body text-xl md:text-5xl lg:text-xl font-semi-bold text-transparent bg-clip-text text-white leading-tight text-center lg:text-left pb-10">
            Shaping Bright Futures, Fostering Innovation, and Inspiring
            Entrepreneurship Every Step of the Way.
          </p>

          {/* Enquire Button */}
          <a
            href="https://wa.me/918129244883?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="font-body border-4 border-transparent mt-6 inline-block px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm md:text-base lg:text-xl font-medium rounded-lg shadow-lg hover:bg-blue-500 hover:text-white hover:border-4 hover:border-blue-400 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enquire Today
          </a>
        </div>
      </div>

      {/* Right Section with Images */}
      <div className="relative h-full w-full lg:w-[48%] flex items-center justify-center p-3 md:p-6">
        <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
          {/* Secondary Image (Rotated) */}
          <img
            src={heroimage1}
            alt="Attractive Design"
            className="bg-aqua absolute z-0 w-full h-auto transform rotate-12 shadow-lg"
            style={{
              backgroundColor: "aqua",
              top: "-1px",
              left: "30px",
              borderRadius: "5% 25% 5% 25%",
              maxWidth: "90%", // Adjusted size
            }}
          />

          {/* Main Image */}
          <img
            src={heroimage}
            alt="Attractive Design"
            className="relative z-10 w-full h-auto shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            style={{
              borderRadius: "5% 25% 5% 25%",
              maxWidth: "93%", // Adjusted width
              maxHeight: "60%", // Adjusted height
            }}
          />
        </div>
      </div>
    </div>
    </>

  
  );
}
