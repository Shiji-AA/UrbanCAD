import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faChalkboardTeacher, faTools, faHandshake } from "@fortawesome/free-solid-svg-icons";

function Benefits() {
  return (
    <div data-aos="fade-up" className="w-full bg-gray-50 flex flex-wrap">
      {/* First half with heading and paragraph */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start py-16 px-8 bg-gray-50">
        <h1 className="pb-10 font-heading text-3xl md:text-4xl font-bold text-aqua mb-4">
          Empowering Your Growth with World-Class Services
        </h1>
        <p className="font-body text-base md:text-lg text-gray-600 text-left max-w-xl">
          Discover unparalleled opportunities to enhance your skills and achieve your career aspirations.
          <br />
          <br />
          Our comprehensive services are tailored to meet your needs, with innovative tools, expert guidance,
          and a global network that opens doors to endless possibilities.
        </p>
      </div>

      {/* Second half with rows of boxes */}
      <div className="w-full md:w-1/2 flex flex-wrap justify-between gap-6 py-16 px-8 bg-gray-50">
        {/* First box */}
        <div className="relative bg-white p-6 md:p-10 rounded-lg shadow-lg text-center group hover:bg-navy transition-all duration-300 ease-in-out w-full md:w-[48%] transform -rotate-3 hover:rotate-0">
          <FontAwesomeIcon icon={faAward} size="3x" className="text-aqua mb-4" />
          <h2 className="font-heading text-lg md:text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            A Decade of Excellence
          </h2>
          <p className="font-body text-sm md:text-base text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            10 years of expertise in delivering high-quality education. We're recognized as leaders in the field.
          </p>
        </div>

        {/* Second box */}
        <div className="relative bg-white p-6 md:p-10 rounded-lg shadow-lg text-center group hover:bg-navy transition-all duration-300 ease-in-out w-full md:w-[48%] transform rotate-3 hover:rotate-0">
          <FontAwesomeIcon icon={faChalkboardTeacher} size="3x" className="text-aqua mb-4" />
          <h2 className="font-heading text-lg md:text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            Cutting-Edge Training
          </h2>
          <p className="font-body text-sm md:text-base text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            Stay ahead in your career with our up-to-date training, incorporating the latest trends and tools.
          </p>
        </div>

        {/* Third box */}
        <div className="relative bg-white p-6 md:p-10 rounded-lg shadow-lg text-center group hover:bg-navy transition-all duration-300 ease-in-out w-full md:w-[48%] transform -rotate-3 hover:rotate-0">
          <FontAwesomeIcon icon={faTools} size="3x" className="text-aqua mb-4" />
          <h2 className="font-heading text-lg md:text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            Comprehensive Tools
          </h2>
          <p className="font-body text-sm md:text-base text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            Access the latest tools and technologies to excel in your field.
          </p>
        </div>

        {/* Fourth box */}
        <div className="relative bg-white p-6 md:p-10 rounded-lg shadow-lg text-center group hover:bg-navy transition-all duration-300 ease-in-out w-full md:w-[48%] transform rotate-3 hover:rotate-0">
          <FontAwesomeIcon icon={faHandshake} size="3x" className="text-aqua mb-4" />
          <h2 className="font-heading text-lg md:text-xl font-semibold text-navy mb-2 group-hover:text-white transition-all duration-300 ease-in-out">
            Sustainable Partnerships
          </h2>
          <p className="font-body text-sm md:text-base text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
            Foster long-term partnerships with experts and industry leaders.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
