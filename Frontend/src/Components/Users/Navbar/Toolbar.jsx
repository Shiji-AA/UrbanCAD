import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { 
  faFacebookF, 
  faInstagram, 
  faXTwitter, // Use faTwitter instead of faXTwitter
  faLinkedin, 
  faYoutube 
} from "@fortawesome/free-brands-svg-icons"; 

function Toolbar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-400 via-teal-500 to-gray-800 text-white py-3 px-8 flex justify-between items-center text-m shadow-lg flex-wrap">
      {/* Left Side: Location, Email, Phone */}
      <div className="flex items-center space-x-4 sm:space-x-6 sm:flex-wrap">
        <div className="flex items-center space-x-1 hidden sm:flex">
          <FaMapMarkerAlt className="text-white" />
          <span>Kerala, India</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEnvelope className="text-white" />
          <a
            href="mailto:info@arcite.in"
            className="hover:underline text-white"
          >
            info@arcite.in
          </a>
        </div>
        <div className="flex items-center space-x-1">
          <FaPhoneAlt className="text-white" />
          <a
            href="tel:+917994211144"
            className="hover:underline text-white"
          >
            +91-799 421 1144
          </a>
        </div>
      </div>

      {/* Right Side: Follow Us */}
      <div className="flex items-center space-x-6 sm:space-x-8 pr-4 sm:flex-wrap sm:justify-center">
        <span className="text-white hidden sm:block">Follow Us :</span>
        <a href="https://www.facebook.com/arciteschooloftechnicaleducation" className="text-white hover:text-blue-500">
          <FontAwesomeIcon icon={faFacebookF} size="lg" />
        </a>
        <a href="https://www.instagram.com/arcite.in" className="text-white hover:text-pink-500">
          <FontAwesomeIcon icon={faInstagram} size="lg" />
        </a>
        <a href="https://x.com/arcite_in" className="text-white hover:text-blue-400">
          <FontAwesomeIcon icon={faXTwitter} size="lg" />
        </a>
        <a href="https://www.linkedin.com/company/arc-institute-of-technical-education/posts/?feedView=all" className="text-white hover:text-blue-700">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
        <a href="https://www.youtube.com/@arciteschooloftechnicaledu6571" className="text-white hover:text-red-500">
          <FontAwesomeIcon icon={faYoutube} size="lg" />
        </a>
      </div>
    </div>
  );
}

export default Toolbar;
