import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faChalkboardTeacher, faGlobeAmericas, faTools, faHandshake, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

function Benefits() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex">
      {/* First half with heading and paragraph (1/4 width) */}
      <div className="w-1/4 flex flex-col justify-center items-start py-16 px-8 bg-gray-50">
        <h1 className=" font-heading text-4xl font-bold text-aqua mb-4">
          Our Services
        </h1>
        <p className=" font-body text-lg text-gray-600 text-left max-w-xl">
          We provide innovative solutions to help you achieve your goals. Our
          platform offers the best features and tools for your needs.
        </p>
      </div>

      {/* Second half with 3 boxes in one row, and an additional row of boxes */}
      <div className="w-3/4 flex flex-col justify-center items-center py-16 px-8 bg-gray-50">
        {/* First row of boxes */}
        <div className="w-full flex justify-between gap-8">
          {/* First box */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg text-center group hover:bg-navy transition-all duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faAward}
              size="3x"
              className="text-aqua mb-4"
            />
            <h2 className="font-heading text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            A Decade of Excellence
            </h2>
            <p className="font-body text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            10 years of expertise in delivering high-quality education. 
            We're recognized as leaders in the field.
            </p>
          </div>

          {/* Second box - positioned lower */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg text-center group transform translate-y-8 hover:bg-navy transition-all duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faChalkboardTeacher}
              size="3x"
              className="text-aqua mb-4"
            />
            <h2 className="text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            Cutting-Edge Training
            </h2>
            <p className="text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            Stay ahead in your career with our up-to-date training, incorporating the latest trends and tools.
            </p>
          </div>

          {/* Third box */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg text-center group hover:bg-navy transition-all duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              size="3x"
              className="text-aqua mb-4"
            />
            <h2 className="text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            Global Networking
            </h2>
            <p className="text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            Leverage a vast network of professionals and expand your opportunities worldwide.
            
            </p>
          </div>
        </div>

        {/* Second row of boxes */}
        <div className="w-full flex justify-between gap-8 mt-8">
          {/* First box */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg text-center group hover:bg-navy transition-all duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faTools}
              size="3x"
              className="text-aqua mb-4"
            />
            <h2 className="text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            Comprehensive Tools
            </h2>
            <p className="text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            Access the latest tools and technologies to excel in your field.
            </p>
          </div>

          {/* Second box - positioned lower */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg text-center group transform translate-y-8 hover:bg-navy transition-all duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faHandshake}
              size="3x"
              className="text-aqua mb-4"
            />
            <h2 className="text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            Sustainable Partnerships
            </h2>
            <p className="text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            Foster long-term partnerships with experts and industry leaders.
            </p>
          </div>

          {/* Third box */}
          <div className="relative bg-white p-6 rounded-lg shadow-lg text-center group hover:bg-navy transition-all duration-300 ease-in-out">
            <FontAwesomeIcon
              icon={faSignInAlt}
              size="3x"
              className="text-aqua mb-4"
            />
            <h2 className="text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            Opportunities
            </h2>
            <p className="text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            Low entry barriers and recognized programs to easily step into your career.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
