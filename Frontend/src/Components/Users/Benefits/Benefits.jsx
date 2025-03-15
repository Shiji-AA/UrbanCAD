import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faChalkboardTeacher, faTools, faHandshake } from "@fortawesome/free-solid-svg-icons";
import ani3 from '../../../assets/certificates/ani3.png';

function Benefits() {
  return (
    <div data-aos="fade-up" className="w-full bg-white flex flex-wrap md:flex-row px-0 sm:px-4 lg:px-8 border border-gray-50">
      
      {/* First half with heading and paragraph */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-6 px-4 sm:px-8 bg-white relative">
        
        <h1 className="pb-10 font-syn text-2xl md:text-4xl font-bold text-transparent bg-[#181818] bg-clip-text transition-all duration-500  hover:scale-105">
          Partner with us for Unparalleled Growth
        </h1>

        <p className="font-syn text-sm md:text-base text-gray-600 text-left max-w-xl">
          Unlock your Potential with our Comprehensive Training and Support Programs
          <br /><br />
          <div className="border-l-8 border-pink-600 pl-4">
            Achieve unparalleled success with our Franchise program, featuring customized support, 
            innovative technologies, and a global network that opens doors to endless possibilities.
          </div>
        </p>

        {/* Enquire Button */}
        <a
          href="https://wa.me/919633221153?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="font-syn border-4 border-transparent mt-14 text-white inline-block px-4 py-2 md:px-6 md:py-3 bg-teal-600 text-sm md:text-base lg:text-xl font-medium  shadow-lg hover:bg-teal-900 hover:text-white hover:border-4 hover:border-teal-400 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Enquire Now
        </a>

        {/* Image positioned to align left on mobile */}
        <div className="relative w-full flex justify-end sm:justify-end ">
          <img 
            data-aos="fade"
            alt="animation"
            className="w-18 sm:w-22 md:w-26 lg:w-30 animate-bounce"
            src={ani3}
          />
        </div>
      </div>

      {/* Second half with rows of boxes */}
      <div className="w-full md:w-1/2 flex flex-wrap sm:justify-between justify-start gap-4 py-8 px-4 sm:px-8 bg-white">
        
        {/* Box components */}
        {[ 
          { icon: faAward, title: "A Decade of Excellence", text: "10 years of expertise in delivering high-quality education. We are recognized as leaders in the field." },
          { icon: faChalkboardTeacher, title: "Cutting-Edge Training", text: "Stay ahead in your career with our up-to-date training, incorporating the latest trends and tools." },
          { icon: faTools, title: "Comprehensive Tools", text: "Access the latest tools and technologies to excel in your field." },
          { icon: faHandshake, title: "Sustainable Partnerships", text: "Foster long-term partnerships with experts and industry leaders." }
        ].map((box, index) => (
          <div
            key={index}
            className={`relative bg-white p-6 md:p-8 rounded-lg shadow-2xl text-left group hover:bg-[#303030] transition-all duration-300 ease-in-out w-full sm:w-[48%] transform ${index % 2 === 0 ? "-rotate-2" : "rotate-2"} hover:rotate-0`}
          >
            <FontAwesomeIcon icon={box.icon} size="3x" className="text-aqua mb-4" />
            <h2 className="font-syn text-lg md:text-xl font-semibold text-[#181818] mb-2 group-hover:text-pink-500 transition-all duration-300 ease-in-out">
              {box.title}
            </h2>
            <p className="font-syn text-sm md:text-base text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
              {box.text}
            </p>
          </div>
        ))}
      </div>

      
    </div>
  );
}

export default Benefits;
