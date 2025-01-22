import { Link } from "react-router-dom";
import { useState } from "react";
import urbancadLogo from "../../../assets/URBANCAD_LOGO2.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown state

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <img
        src={urbancadLogo}
        className="mr-5"
        alt="URBAN CAD"
        width="140"
      />

      {/* Vertical Line */}
      <div className="h-10 border-l-2 border-aqua mx-5"></div>

      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className={menuOpen ? "hidden" : "h-10 w-10 text-aqua"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>

          <svg
            className={menuOpen ? "h-10 w-10 text-aqua" : "hidden"}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <div
        className={`w-full flex-grow md:flex md:items-center md:w-auto ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <div className="ml-5 flex items-center space-x-6 mt-5 md:mt-0 border-t-2 border-white md:border-none">
          <Link
            to="/"
            className="text-navy font-semibold hover:text-aqua px-3 py-3 border-b-2 border-transparent hover:border-aqua md:border-none"
          >
            Home
          </Link>

          {/* Our Programs Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-navy font-semibold hover:text-aqua px-3 py-3 border-b-2 border-transparent hover:border-aqua md:border-none"
            >
              Our Programs
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-52 border border-aqua">
                <Link
                  to="/civil"
                  className="block px-4 py-2 text-navy hover:bg-aqua hover:text-white"
                >
                  Civil Engineering
                </Link>
                <Link
                  to="/mechanical"
                  className="block px-4 py-2 text-navy hover:bg-aqua hover:text-white"
                >
                  Mechanical Engineering
                </Link>
                <Link
                  to="/electrical"
                  className="block px-4 py-2 text-navy hover:bg-aqua hover:text-white"
                >
                  Electrical Engineering
                </Link>
                <Link
                  to="/datascience"
                  className="block px-4 py-2 text-navy hover:bg-aqua hover:text-white"
                >
                  Data Science
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/"
            className="text-navy font-semibold hover:text-aqua px-3 py-3 border-b-2 border-transparent hover:border-aqua md:border-none"
          >
            Franchise
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
