import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward, faUserGraduate, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import heroimage from '../../../assets/heroimage4.jpg';
import heroimage1 from '../../../assets/heroimage6.jpg';
export default function Home() {
  return (
    <div className="relative bg-navy flex flex-col lg:flex-row items-center justify-center">
      {/* Left Section */}
      <div className="flex items-center justify-start h-full w-full lg:w-1/2 bg-gray-800 bg-opacity-20 p-6 lg:p-12">
        <div className="text-left">
          {/* Main Headings */}
          <h1 className="pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-600 to-blue-700 text-3xl font-bold md:text-5xl leading-tight mb-4 hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
            Build Your Legacy!
          </h1>
         
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 text-xl md:text-2xl font-medium md:leading-relaxed mb-4 text-center hover:text-blue-500 transform transition-all duration-500 hover:scale-110 hover:translate-y-2"
  style={{ textShadow: '0 0 2px white, 0 0 2px blue, 0 0 2px blue' }}>
  Empowering Education, Enabling Entrepreneurship !!
</h3>




          {/* Features Section */}
          <div className="flex flex-wrap justify-between mt-8 space-y-6 md:space-y-0 md:space-x-6 lg:space-x-12 border-t-2 border-aqua pt-6">
            {/* Feature 1 */}
            <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-500 to-blue-500 rounded-lg shadow-lg hover:bg-aqua hover:text-white transition-all duration-300 w-40 max-w-xs h-40 shadow-md hover:shadow-2xl transform transition duration-500 ease-in-out relative">
  {/* Bottom-Right Border */}
  <div className="absolute bottom-0 right-0 w-full h-full border-blue-700 rounded-lg"></div>
  <FontAwesomeIcon icon={faAward} size="3x" color="#ffffff" />
  <p className="text-white text-sm font-medium mt-2 text-center">
    10 Years of <br /> Excellence
  </p>
</div>


{/* Feature 2 */}
<div className="flex flex-col items-center p-6 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg shadow-lg hover:bg-aqua hover:text-white transition-all duration-300 w-40 max-w-xs h-40 shadow-md hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
  <FontAwesomeIcon icon={faUserGraduate} size="3x" color="#ffffff" />
  <p className="text-white text-sm font-medium mt-2 text-center">
    100+ Students <br /> & Professionals Trained
  </p>
</div>

{/* Feature 3 */}
<div className="flex flex-col items-center p-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg hover:bg-aqua hover:text-white transition-all duration-300 w-40 max-w-xs h-40 shadow-md hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
  <FontAwesomeIcon icon={faBookOpen} size="3x" color="#ffffff" />
  <p className="text-white text-sm font-medium mt-2 text-center">
    100+ Industry <br /> Aligned Courses
  </p>
</div>



        
          </div>

          {/* Enquire Button with Gradient */}
          <a
            href="https://wa.me/918129244883?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="border-4 border-transparent mt-6 inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-navy text-base md:text-xl font-medium rounded-lg shadow-lg hover:bg-blue-500 hover:text-white hover:border-4 hover:border-blue-400 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Enquire Today
          </a>
        </div>
      </div>

      {/* Right Section with Image */}
      <div className="  relative h-full w-full lg:w-1/2 flex items-center justify-center p-6">
        <div className="relative w-full max-w-lg">
          {/* Secondary Image (Rotated) */}
          <img 
            src={heroimage1}
            alt="Attractive Design"
            className=" absolute z-0 w-full h-auto transform rotate-12 shadow-md"
            style={{
              backgroundColor:"aqua",
              top: '-2px',
              left: '20px',
              borderRadius: '5% 25% 5% 25%',
            }}
          />

          {/* Main Image */}
          <img
            src={heroimage}
            alt="Attractive Design"
            className="relative z-10 w-full h-auto shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
            style={{
              borderRadius: '5% 25% 5% 25%',
            }}
          />
        </div>
      </div>
    </div>
  );
}
