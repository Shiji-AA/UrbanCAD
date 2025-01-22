
import logoArcite2 from "../../../assets/logoArcite2.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-gray-300 dark:bg-black">
        <div className="sm:flex sm:items-center sm:justify-center border-t border-gray-300 p-10">
              <span className="text-sm text-gray-900 sm:text-center dark:text-gray-400">
                © 2025{" "}
                <a href="https://flowbite.com/" className="">
                  Powered By  <Link to="" className="flex items-center">
                  <img src={logoArcite2} className="h-7 w-15 mr-3" alt="ARCITE" />
                </Link>
                </a>
                
              </span>
            </div>
        </footer>
    </>
  );
}

export default Footer;
