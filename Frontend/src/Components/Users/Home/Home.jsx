import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faUserGraduate,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import heroimage from "../../../assets/certificates/heroimage3.png";
import { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(80);  // Courses
  const [yearsCount, setYearsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);

  useEffect(() => {
    const yearsInterval = setInterval(() => {
      setYearsCount((prev) => (prev < 10 ? prev + 1 : prev));
    }, 100);

    const studentsInterval = setInterval(() => {
      setStudentsCount((prev) => (prev < 10 ? prev + 1 : prev));
    }, 100);

    return () => {
      clearInterval(yearsInterval);
      clearInterval(studentsInterval);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount < 100 ? prevCount + 1 : prevCount));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative bg-[#162726] flex flex-col lg:flex-row items-start justify-center py-28 px-4 md:px-8"
        >
             <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-[#162726] opacity-90"></div>
        {/* Left Section */}
        <div className="mt-20 flex flex-col items-start justify-start h-full w-full lg:w-[48%] bg-gray-800 bg-opacity-20 p-6 md:p-8 lg:p-10 space-y-6">
          <div className="text-left space-y-4">
            {/* Main Headings */}
            <h1 className="font-syn pb-2 text-transparent bg-clip-text bg-white text-2xl md:text-4xl lg:text-5xl font-bold leading-tight hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
              Build Your Legacy !
            </h1>

            <h3
              className="font-syn text-transparent bg-clip-text bg-gradient-to-r from-white to-aqua text-lg md:text-xl lg:text-2xl font-medium leading-relaxed hover:text-aqua transform transition-all duration-500 hover:scale-110 hover:translate-y-2"
              style={{
                textShadow: "0 0 0px white, 0 0 5px aqua, 0 0 10px aqua",
              }}
            >
              Empowering Education <br /> Enabling Entrepreneurship !!
            </h3>

            {/* Features Section */}
            <div className=" font-syn flex flex-col sm:flex-row justify-start items-start sm:space-x-6 lg:space-x-8 border-t-2 border-aqua pt-8 pb-6 space-y-6 sm:space-y-0">
              {/* Feature 1 */}
              <div data-aos="fade-up" className="flex items-center text-left space-x-4">
                <FontAwesomeIcon icon={faAward} size="2x" color="aqua" />
                <div>
                  <div className="text-1xl md:text-2xl font-bold text-white">
                    {yearsCount}+
                  </div>
                  <p className="text-white  text-sm md:text-base font-medium mt-1">
                    Years of Excellence
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div data-aos="fade-up" className="flex items-center text-left space-x-4">
                <FontAwesomeIcon icon={faUserGraduate} size="2x" color="aqua" />
                <div>
                  <div className="text-1xl md:text-2xl font-bold text-white">
                    {studentsCount.toLocaleString()}k+
                  </div>
                  <p className="text-white text-sm md:text-base font-medium mt-1">
                    Students Trained
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div data-aos="fade-up" className="flex items-center text-left space-x-4">
                <FontAwesomeIcon icon={faBookOpen} size="2x" color="aqua" />
                <div>
                  <div className="text-1xl md:text-2xl font-bold text-white">
                    {count}+
                  </div>
                  <p className="text-white text-sm md:text-base font-medium mt-1">
                    Industrial Courses
                  </p>
                </div>
              </div>
            </div>

            <p className=" relative z-20 font-syn text-sm md:text-base font-normal bg-clip-text text-white leading-tight text-left pb-10">
              Shaping Bright Futures, Fostering Innovation, and Inspiring Entrepreneurship Every Step of the Way.
            </p>

            {/* Enquire Button */}
            <a
              href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className=" relative z-20 font-syn border-4 border-transparent mt-14 text-white inline-block px-4 py-2 md:px-6 md:py-3 bg-teal-600 text-sm md:text-base lg:text-xl font-medium  shadow-lg hover:bg-teal-900 hover:text-white hover:border-4 hover:border-teal-400 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              Enquire Today
            </a>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className=" mt-20 relative h-full w-full lg:w-[60%] flex items-start justify-start p-3 md:p-6">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-2xl">


        
          <img
  src={heroimage}
  height={1300}  // Increased height
  width={500}   // Increased width
  alt="Attractive Design"
  className="w-full max-w-[100%] shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 border-8 border-orange-50"
  style={{
    borderRadius: "5%",
  }}
/>

          </div>
        </div>
      </div>
    </>
  );
}