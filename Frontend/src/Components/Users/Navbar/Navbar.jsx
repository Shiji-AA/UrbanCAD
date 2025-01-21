import { Link } from "react-router-dom";
import { useState } from "react";
import urbancadLogo from "../../../assets/urbancadLogo.jpg"
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className=" bg-black text-white text-end pr-10 pb-3">Login</div>
      <nav className="flex flex-wrap items-center justify-between p-3 bg-white">
        <img src={urbancadLogo} className="" alt="ARCITE" width="130" height="50"/>

        <div className="flex md:hidden">
          <button onClick={toggleMenu}>
            <img
              className={menuOpen ? "hidden" : "block"}
              src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
              width="40"
              height="40"
              alt="Menu"
            />
            <img
              className={menuOpen ? "block" : "hidden"}
              src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
              width="40"
              height="40"
              alt="Close"
            />
          </button>
        </div>
        <div
          className={`w-full flex-grow md:flex md:items-center md:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <div className=" ml-72 text-right text-bold mt-5 md:mt-0 border-t-2 border-white-900 md:border-none">
            <Link
              to="/"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Dashboard
            </Link>

            <Link
              to="/services"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Services
            </Link>

            <Link
              to="/partners"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Partners
            </Link>

            <Link
              to="/"
              className="block md:inline-block text-black font-semibold hover:text-blue-500 px-3 py-3 border-b-2 border-white-900 md:border-none"
            >
              Need to become a Franchisee?
            </Link>

          

       
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
