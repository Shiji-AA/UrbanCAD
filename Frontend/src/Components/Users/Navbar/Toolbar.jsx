import { FaEnvelope, FaPhoneAlt } from "react-icons/fa"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { 
  faFacebookF, 
  faInstagram, 
  faXTwitter, // Corrected to faTwitter
  faLinkedin, 
  faYoutube 
} from "@fortawesome/free-brands-svg-icons"; 

function Toolbar() {
  return (
    <div className="font-body w-full bg-gradient-to-r from-teal-400 via-teal-500 to-gray-800 text-white py-3 px-8 flex justify-between items-center text-m shadow-lg flex-wrap">
      {/* Left Side: Email and Phone in the same row */}
      <div className="flex items-center space-x-4 sm:space-x-6 sm:flex-wrap w-full sm:w-auto">
        <div className="flex items-center space-x-1">
          <FaEnvelope className="text-white hover:text-navy" />
          <a
            href="mailto:info@urbancad.in"
            className="hover:underline text-white hover:text-navy"
          >
            info@urbancad.in

          </a>
        </div>
        <div className="flex items-start space-x-2">
          <FaPhoneAlt className="text-white hover:text-navy" />
          <a
            href="tel:+919633221153"
            className="hover:underline text-white hover:text-navy"
          >
            +91-9633221153
          </a>
        </div>
      </div>

      {/* Right Side: Follow Us in a separate row */}
      <div className="w-full sm:w-auto mt-2 sm:mt-0"> {/* Reduced top margin */}
        <div className="flex items-center justify-center space-x-4 sm:space-x-6">
          <span className="text-white  sm:block hover:text-aqua">Follow Us :</span>
          <a href="https://www.facebook.com/arciteschooloftechnicaleducation" className="text-white hover:text-aqua">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a href="https://www.instagram.com/arcite.in" className="text-white hover:text-aqua">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://twitter.com/arcite_in" className="text-white hover:text-aqua">
            <FontAwesomeIcon icon={faXTwitter} size="lg" /> {/* Corrected */}
          </a>
          <a href="https://www.linkedin.com/company/arc-institute-of-technical-education/posts/?feedView=all" className="text-white hover:text-aqua">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a href="https://www.youtube.com/@arciteschooloftechnicaledu6571" className="text-white hover:text-aqua">
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Toolbar;
