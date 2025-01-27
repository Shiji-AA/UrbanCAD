import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerbg from '../../../assets/certificates/footerbg1.avif'
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faMapMarkerAlt,
  faEnvelope,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import logoArcite2 from "../../../assets/URBANCAD_LOGO2.png";

function Footer1() {
  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className=" font-body border-t border-black">
        <footer
          className="bg-white text-gray-900"
          style={{
            backgroundImage: `url(${footerbg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-6">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* First half */}
              <div className="flex-1">
                <Link to="" className="flex items-center">
                  <img src={logoArcite2} className="h-16 mr-3" alt="ARCITE" />
                </Link>
                <p className="text-lg mt-6 text-gray-900">
                  ARCITE, an ISO 9001-2015 certified institution, was founded in
                  2015 with the goal of fostering a better engineering culture
                  by providing quality and affordable training programs to the
                  emerging engineering community.
                </p>
              </div>

              {/* Second half */}
              <div className="flex-1 grid grid-cols-2 gap-4">
                <div>
                  <h2 className=" font-heading mb-6 text-2xl font-semibold text-navy">
                    Our Social
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="https://www.facebook.com/arciteschooloftechnicaleducation/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-transform transform hover:translate-x-4 hover:text-aqua"
                      >
                        <FontAwesomeIcon
                          icon={faFacebookF}
                          size="lg"
                          className=" text-aqua rounded-full hover:bg-aqua hover:text-navy transition-colors"
                        />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/arcite.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-transform transform hover:translate-x-4 hover:text-aqua"
                      >
                        <FontAwesomeIcon
                          icon={faInstagram}
                          size="lg"
                          className=" text-aqua rounded-full hover:bg-aqua hover:text-navy transition-colors"
                        />
                        <span>Instagram</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@arciteschooloftechnicaledu6571"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-transform transform hover:translate-x-4 hover:text-aqua"
                      >
                        <FontAwesomeIcon
                          icon={faYoutube}
                          size="lg"
                          className=" text-aqua rounded-full hover:bg-aqua hover:text-navy transition-colors"
                        />
                        <span>Youtube</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/arcite_in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-transform transform hover:translate-x-4 hover:text-aqua"
                      >
                        <FontAwesomeIcon
                          icon={faXTwitter}
                          size="lg"
                          className=" text-aqua rounded-full hover:bg-aqua hover:text-navy transition-colors"
                        />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/arc-institute-of-technical-education/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition-transform transform hover:translate-x-4 hover:text-aqua"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          size="lg"
                          className=" text-aqua rounded-full hover:bg-aqua hover:text-navy transition-colors"
                        />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className=" font-heading mb-6 text-2xl font-semibold text-navy">
                    Get In Touch
                  </h2>
                  <ul className="space-y-4">
                    <li className="text-lg flex items-center gap-2">
                      <FontAwesomeIcon icon={faPhone} className="text-aqua" />
                      <span>+91-799 421 1144</span>
                    </li>
                    <li className="text-lg flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="text-aqua"
                      />
                      <span>Kerala, India</span>
                    </li>
                    <li className="text-lg flex items-center gap-2">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="text-aqua"
                      />
                      <span>info@arcite.in</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" font-body relative sm:flex sm:items-center sm:justify-between border-t border-gray-700 pt-6 mt-6">
              <span className="font-body text-lg text-gray-900 sm:text-center">
                © 2025{" "}
                <a href="">
                  An{" "}
                  <a href="https://technical.arcite.in/" className="text-aqua">
                    ARCITE
                  </a>{" "}
                  Innovation
                </a>
              </span>
              <div className="flex items-center gap-4">
                <span className="text-lg text-gray-900 sm:text-right">
                  <a href="">Terms Of Services</a>
                </span>

                <button
                  onClick={scrollToTop}
                  className="bg-aqua text-white p-4 w-14 h-14 rounded-full shadow-lg transform rotate-[-45deg] transition-all duration-300 hover:bg-navy hover:rotate-0"
                  aria-label="Scroll to top"
                >
                  <FontAwesomeIcon icon={faArrowUp} size="lg" />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer1;
