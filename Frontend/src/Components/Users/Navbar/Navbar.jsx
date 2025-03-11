import { Link } from "react-router-dom";
import { useState } from "react";
import urbancadLogo from "../../../assets/URBANCAD_LOGO2.png";
import squaremenu from "../../../assets/squaremenu1.png";
import closewindow from "../../../assets/closewindow.png";
// import Toolbar from "./Toolbar";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
    {/* <Toolbar/> */}
      <nav className="flex flex-wrap items-center justify-between p-3 bg-white">
        <img src={urbancadLogo} className="" alt="UrbanCAD logo" width="120" />

             {/* Vertical Line */}
             <div className="h-10 border-l-2 border-aqua mx-5"></div>

        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            
            <img
              className={menuOpen ? "hidden" : "block"}
              src={squaremenu} 
              width="37"
              height="37"        
              alt="Menu"
            />
            <img
              className={menuOpen ? "block" : "hidden"}
              src={closewindow}
              width="37"
              height="37"
              alt="Close"
            />
          </button>
        </div>
        <div
          className={`w-full flex-grow md:flex md:items-center md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className=" font-heading ml-10 text-right text-bold mt-5 md:mt-0 border-t-2 border-white-900 md:border-none">
            <Link
              to="/"
              className="block md:inline-block text-navy font-semibold hover:text-aqua px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Home
            </Link>       
            <Link
              to="/franchise"
              className="block md:inline-block text-navy font-semibold hover:text-aqua px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
                 Franchise
            </Link>
            <Link
              to="/aboutus"
              className="block md:inline-block text-navy font-semibold hover:text-aqua px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              About Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;