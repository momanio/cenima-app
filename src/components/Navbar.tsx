import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center flex-col sm:flex-row">
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
      </ul>
    </nav>
  );
};

export default Navbar;
