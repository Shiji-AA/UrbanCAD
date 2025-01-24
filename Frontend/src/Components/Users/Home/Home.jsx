import hero1image from "../../../assets/heroimage2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUserGraduate, faBookOpen } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
 <header>
  <div
    className="w-full h-[110vh] bg-cover bg-center"
    style={{
      backgroundImage: `url(${hero1image})`,
      backgroundSize: 'cover',  // Ensures the image fits without exceeding the container size
      backgroundRepeat: 'no-repeat',  // Prevents the image from repeating if it doesn't cover the entire container
    }}
  >
    <div className="flex items-center justify-start h-full w-full bg-gray-800 bg-opacity-20">
      <div className="text-left pl-12">
        {/* Main Headings */}
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-navy via-purple-600 to-blue-700 text-4xl font-bold md:text-5xl leading-tight mb-4">
                Build Your Legacy!
              </h1>
              <h3 className="text-white text-lg md:text-2xl font-semibold md:leading-relaxed mb-6">
                Empowering Education, Enabling Entrepreneurship
              </h3>

        {/* Features Section */}
        <div className="flex justify-between mt-8 space-x-6 md:space-x-12 border-t-2 border-aqua pt-6">
                {/* Feature 1 */}
                <div className="flex flex-col items-center p-6 bg-gradient-to-r from-navy to-blue-500 rounded-lg shadow-lg hover:bg-aqua hover:text-white transition-all duration-300 w-full max-w-xs h-36 shadow-md hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
                  <FontAwesomeIcon icon={faAward} size="3x" color="#ffffff" />
                  <p className="text-white text-sm font-medium mt-2 text-center">
                    10 Years of <br /> Excellence
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center p-6 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg shadow-lg hover:bg-aqua hover:text-white transition-all duration-300 w-full max-w-xs h-36 shadow-md hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
                  <FontAwesomeIcon icon={faUserGraduate} size="3x" color="#ffffff" />
                  <p className="text-white text-sm font-medium mt-2 text-center">
                    100+ Students <br /> & Professionals Trained
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center p-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg shadow-lg hover:bg-aqua hover:text-white transition-all duration-300 w-full max-w-xs h-36 shadow-md hover:shadow-2xl transform transition duration-500 ease-in-out hover:scale-105">
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
  className="border-4 border-transparent mt-6 inline-block px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-navy text-xl font-large rounded-lg shadow-lg hover:bg-blue-500 hover:text-white hover:border-4 hover:border-blue-400 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
>
  Enquire Today
</a>



      </div>
    </div>
  </div>
</header>


    </>
  );
}

export default Home;
