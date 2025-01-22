import hero1image from "../../../assets/hero1image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward, faUserGraduate, faBookOpen } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <header>      
        <div
          className="w-full bg-cover"
          style={{
            height: "32rem",
            backgroundImage: `url(${hero1image})`,
          }}
        >
          <div className="flex items-center justify-start h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-left pl-12">
              {/* Main Headings */}
              <h1 className="text-aqua text-3xl font-bold  md:text-4xl">
                Be A Part Of <br/>10 Years Of Legacy!
              </h1>
              <h3 className="text-white text-2xl font-semibold md:text-2xl mt-2">
                Over 100 Franchises Across 2 Countries
              </h3>

              {/* Features Section */}
              <div className="flex items-start mt-6 space-x-12 border-t border-aqua pt-4">
                {/* Feature 1 */}
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faAward} size="2x" color="#ffffff" />
                  <p className="text-white text-sm font-medium mt-2">
                    10 Years of <br/> Excellence
                  </p>
                </div>
                <div className="border-2 border-aqua h-12"></div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon
                    icon={faUserGraduate}
                    size="2x"
                    color="#ffffff"
                  />
                  <p className="text-white text-sm font-medium mt-2">
                    100+ Students<br/> & Professionals Trained
                  </p>
                </div>
                <div className="border-2 border-aqua h-12"></div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center">
                  <FontAwesomeIcon icon={faBookOpen} size="2x" color="#ffffff" />
                  <p className="text-white text-sm font-medium mt-2">
                    100+ Industry<br/>Aligned Courses
                  </p>
                </div>
              </div>

              {/* Enquire Button */}
              <a
                href="https://wa.me/918129244883?text=Hi%20there!%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block px-6 py-2 bg-aqua text-navy text-sm uppercase font-medium rounded hover:bg-navy hover:text-aqua transition focus:outline-none focus:ring-2 focus:ring-aqua"
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
