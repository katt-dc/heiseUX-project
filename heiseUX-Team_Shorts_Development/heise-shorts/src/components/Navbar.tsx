// components/NavBar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky w-full text-center p-4 bg-heise-light-grey text-heise-white h-14 flex justify-center space-x-5">
      <Link to="/" className="hover:text-gray-400 text-heise-white">
        Home
      </Link>
      <Link to="/shorts" className="hover:text-gray-400 text-heise-white">
        Shorts
      </Link>
      <Link to="/impressum" className="hover:text-gray-400 text-heise-white">
        Impressum
      </Link>
    </nav>
  );
};

export default Navbar;
