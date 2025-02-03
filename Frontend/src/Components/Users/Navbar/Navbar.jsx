import { Link } from "react-router-dom";
import { useState } from "react";
import urbancadLogo from "../../../assets/URBANCAD_LOGO2.png";
import Toolbar from "./Toolbar";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown state

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // const toggleDropdown = () => {
  //   setDropdownOpen((prev) => !prev); // Toggle dropdown visibility
  // };

  return (
    <>
      <Toolbar />
      <nav className="flex items-center justify-between p-3 bg-white shadow-md">
        {/* Logo */}
        <img src={urbancadLogo} className="mr-5" alt="URBAN CAD" width="140" />

        {/* Vertical Line */}
        <div className="h-10 border-l-2 border-aqua mx-5"></div>

        {/* Hamburger Menu Button for Small Screens */}
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
          className={`w-full font-heading flex-grow md:flex md:items-center md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className="ml-5 flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6 mt-5 md:mt-0 border-t-2 border-white md:border-none">
            <Link
              to="/"
              className="text-navy font-semibold hover:text-aqua px-3 py-3 border-b-2 border-transparent hover:border-aqua md:border-none"
            >
              Home
            </Link>

      

            <Link
              to="/aboutus"
              className="text-navy font-semibold hover:text-aqua px-3 py-3 border-b-2 border-transparent hover:border-aqua md:border-none"
            >
              AboutUs
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
