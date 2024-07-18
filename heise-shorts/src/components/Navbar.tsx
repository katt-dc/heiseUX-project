// components/NavBar.js
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky w-full text-center p-4 bg-heise-light-grey text-heise-white">
      <Link to="/" className="mr-4 hover:text-gray-400 text-heise-white">
        Home
      </Link>
      <Link to="/shorts" className="hover:text-gray-400 text-heise-white">
        Shorts
      </Link>
    </nav>
  );
};

export default Navbar;
