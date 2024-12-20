import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center py-2 sticky top-0 z-20 bg-gray-950 sm:opacity-[0.7] xxs:h-[12vh]">
      <ul className="flex flex-col sm:flex-row sm:space-x-4">
        <li>
          <Link to="/" className="px-2 py-1 sm:px-4 sm:py-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="/movies" className="px-2 py-1 sm:px-4 sm:py-2">
            Movies
          </Link>
        </li>
        <li>
          <Link to="/series" className="px-2 py-1 sm:px-4 sm:py-2">
            Series
          </Link>
        </li>
        <li>
          <Link to="/contact" className="px-2 py-1 sm:px-4 sm:py-2">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
