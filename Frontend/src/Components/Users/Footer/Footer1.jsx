import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerbg from "../../../assets/certificates/footerbg1.avif";
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="bg-white text-gray-900"
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-full max-w-screen-xl lg:py-6 px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Left Section */}
          <div className="flex-1">
            <Link to="" className="flex items-center">
              <img src={logoArcite2} className="h-14 mr-3" alt="ARCITE" />
            </Link>
            <p className="text-sm mt-6 text-gray-800 leading-relaxed">
              ARCITE, an ISO 9001-2015 certified institution, was founded in
              2015 with the goal of fostering a better engineering culture by
              providing quality and affordable training programs to the emerging
              engineering community.
            </p>
          </div>

          {/* Right Section - Social Links & Contact */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {/* Social Links */}
            <div>
              <h2 className="font-heading mb-4 text-lg font-semibold text-navy">
                Follow Us
              </h2>
              <ul className="space-y-3">
                {[
                  { href: "https://www.facebook.com/arciteschooloftechnicaleducation/", icon: faFacebookF, label: "Facebook" },
                  { href: "https://www.instagram.com/arcite.in/", icon: faInstagram, label: "Instagram" },
                  { href: "https://www.youtube.com/@arciteschooloftechnicaledu6571", icon: faYoutube, label: "YouTube" },
                  { href: "https://x.com/arcite_in", icon: faXTwitter, label: "Twitter" },
                  { href: "https://www.linkedin.com/company/arc-institute-of-technical-education/", icon: faLinkedin, label: "LinkedIn" },
                ].map(({ href, icon, label }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 transition-all hover:text-aqua hover:translate-x-2"
                    >
                      <FontAwesomeIcon
                        icon={icon}
                        size="lg"
                        className="text-aqua hover:bg-aqua hover:text-navy p-2 rounded-full transition-colors"
                      />
                      <span className="text-sm">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="font-heading mb-4 text-lg font-semibold text-navy">
                Contact Us
              </h2>
              <ul className="space-y-3">
                {[
                  { icon: faPhone, text: "+91-963 322 1153" },
                  { icon: faMapMarkerAlt, text: "Kerala, India" },
                  { icon: faEnvelope, text: "info@urbancad.in" },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm">
                    <FontAwesomeIcon icon={icon} className="text-aqua" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mt-6 pt-4 border-t-2 border-gray-300 text-sm">
          <span className="text-gray-900 text-center sm:text-left">
            © 2025{" "}
            <a href="">
              An{" "}
              <a href="https://technical.arcite.in/" className="text-aqua">
                ARCITE
              </a>{" "}
              Initiative
            </a>
          </span>

          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            {/* <a href="" className="text-gray-900">
              Terms Of Services
            </a> */}

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="bg-aqua text-white p-2 w-9 h-9 rounded-full shadow-lg transform rotate-[-45deg] transition-all duration-300 hover:bg-navy hover:rotate-0"
              aria-label="Scroll to top"
            >
              <FontAwesomeIcon icon={faArrowUp} size="md" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
