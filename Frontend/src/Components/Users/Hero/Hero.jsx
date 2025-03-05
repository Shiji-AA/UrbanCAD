import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gold from '../../../assets/certificates/glod.png';
import stars from '../../../assets/certificates/stars.png';
import {
  faAward,
  faUserGraduate,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

export default function Hero() {
  const [count, setCount] = useState(80);
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
      <div
        className="relative min-h-screen flex flex-col lg:flex-row items-start justify-center py-12 px-4 md:px-8"
        style={{ backgroundImage: `url(${stars})` }}
      >
        {/* Left Section */}
        <div className="flex-1 flex flex-col items-start justify-center h-full w-full lg:w-[48%] bg-opacity-20 p-6 md:p-8 lg:p-12 space-y-6">
          <div className="text-left space-y-4">
            <h1 className="pb-2 text-transparent bg-clip-text bg-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
              Build Your Legacy!
            </h1>

            <h3
              className="font-body text-transparent bg-clip-text bg-gradient-to-r from-white to-aqua text-lg md:text-xl lg:text-2xl font-medium leading-relaxed hover:text-aqua transform transition-all duration-500 hover:scale-110 hover:translate-y-2"
              style={{ textShadow: "0 0 0px white, 0 0 5px aqua, 0 0 10px aqua" }}
            >
              Empowering Education <br /> Enabling Entrepreneurship !!
            </h3>

            {/* Features Section */}
            <div className="flex flex-col sm:flex-row justify-start items-start sm:space-x-6 lg:space-x-8 border-t-2 border-white pt-8 pb-6 space-y-6 sm:space-y-0">
              <div data-aos="fade-up" className="flex items-center text-left space-x-4">
                <FontAwesomeIcon icon={faAward} size="2x" color="white" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{yearsCount}+</div>
                  <p className="text-white font-body text-sm md:text-base font-medium mt-1">
                    Years of Excellence
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="flex items-center text-left space-x-4">
                <FontAwesomeIcon icon={faUserGraduate} size="2x" color="white" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    {studentsCount.toLocaleString()}k+
                  </div>
                  <p className="text-white font-body text-sm md:text-base font-medium mt-1">
                    Students Trained
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" className="flex items-center text-left space-x-4">
                <FontAwesomeIcon icon={faBookOpen} size="2x" color="white" />
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-white">{count}+</div>
                  <p className="text-white font-body text-sm md:text-base font-medium mt-1">
                    Industrial Courses
                  </p>
                </div>
              </div>
            </div>

            <p className="font-body text-sm md:text-base font-semi-bold text-transparent bg-clip-text text-white leading-tight text-left pb-10">
              Shaping Bright Futures, Fostering Innovation, and Inspiring Entrepreneurship Every Step of the Way.
            </p>

            {/* Enquire Button */}
            <a
              href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="font-body border-4 border-transparent mt-6 inline-block px-4 py-2 md:px-6 md:py-3 bg-white text-black text-sm md:text-base lg:text-xl font-medium rounded-lg shadow-lg hover:bg-black hover:text-white hover:border-4 hover:border-white hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-aqua"
            >
              Enquire Today
            </a>
          </div>
        </div>

        {/* Right Section with Images */}
        <div className="flex-1 flex items-center justify-center h-full w-full lg:w-[48%] p-3 md:p-6">
          <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl">
            {/* Main Image */}
            <img
              src={gold}
              className="relative z-10 h-96 w-96 md:h-[28rem] md:w-[28rem] object-cover drop-shadow-lg animate-float glow-effect -ml-10"
              alt="Gold Certificate"
            />
          </div>
        </div>
      </div>

      {/* Tailwind Custom CSS for Animation & Glow Effect */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }

          .glow-effect {
            filter: drop-shadow(-20px 0px 1.75em rgb(81,147,194));
          }
        `}
      </style>
    </>
  );
}
