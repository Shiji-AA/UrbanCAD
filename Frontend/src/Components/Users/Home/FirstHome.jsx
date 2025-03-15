import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faUserGraduate,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import heroimage from "../../../assets/certificates/image28.jpg";
import heroimage1 from "../../../assets/heroimage6.jpg";
//import bg from "../../../assets/certificates/bg.jpg
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
      <div className="relative bg-navy flex flex-col lg:flex-row items-start justify-center py-12 px-4 md:px-8"
        style={{
          // backgroundImage: `url(${bg})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
        }}>
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

        <div className="absolute inset-0 bg-black opacity-75"></div>
        {/* Left Section */}
        <div className="flex flex-col items-start justify-start h-full w-full lg:w-[48%] bg-gray-800 bg-opacity-20 p-6 md:p-8 lg:p-12 space-y-6">
          <div className="text-left space-y-4">
            {/* Main Headings */}
            <h1 className="pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-aqua text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
              Build Your Legacy!
            </h1>

            <h3
              className="font-body text-transparent bg-clip-text bg-gradient-to-r from-white to-aqua text-lg md:text-xl lg:text-2xl font-medium leading-relaxed hover:text-aqua transform transition-all duration-500 hover:scale-110 hover:translate-y-2"
              style={{
                textShadow: "0 0 0px white, 0 0 5px aqua, 0 0 10px aqua",
              }}
            >
              Empowering Education <br /> Enabling Entrepreneurship !!
            </h3>

            {/* Features Section */}
            <div className="flex flex-col sm:flex-row justify-start items-start sm:space-x-6 lg:space-x-8 border-t-2 border-aqua pt-8 pb-6 space-y-6 sm:space-y-0">
              {/* Feature 1 */}
              <div data-aos="fade-up" className="flex items-center text-left space-x-4">
                <FontAwesomeIcon icon={faAward} size="2x" color="aqua" />
                <div>
                  <div className="text-1xl md:text-2xl font-bold text-white">
                    {yearsCount}+
                  </div>
                  <p className="text-white font-body text-sm md:text-base font-medium mt-1">
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
                  <p className="text-white font-body text-sm md:text-base font-medium mt-1">
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
                  <p className="text-white font-body text-sm md:text-base font-medium mt-1">
                    Industrial Courses
                  </p>
                </div>
              </div>
            </div>

            <p className="relative z-20 font-body text-sm md:text-base font-normal bg-clip-text text-white leading-tight text-left pb-10">
              Shaping Bright Futures, Fostering Innovation, and Inspiring Entrepreneurship Every Step of the Way.
            </p>

            {/* Enquire Button */}
            <a
              href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className=" relative z-20 font-body border-4 border-transparent mt-6 inline-block px-4 py-2 md:px-6 md:py-3 bg-teal-700 text-white text-sm md:text-base lg:text-xl font-medium rounded-lg shadow-lg "
            >
              Enquire Today
            </a>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className="relative h-full w-full lg:w-[48%] flex items-start justify-start p-3 md:p-6">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
            {/* Secondary Image (Rotated) */}
            <img
              src={heroimage1}
              alt="Attractive Design"
              className="absolute z-0 w-full max-w-[92%] transform rotate-12 shadow-lg"
              style={{
                backgroundColor: "aqua",
                top: "4px",
                left: "25px",
                borderRadius: "5% 25% 5% 25%",
              }}
            />

            {/* Main Image */}
            <img
              src={heroimage}
              alt="Attractive Design"
              className="relative z-10 w-full max-w-[93%] shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
              style={{
                borderRadius: "5% 25% 5% 25%",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}