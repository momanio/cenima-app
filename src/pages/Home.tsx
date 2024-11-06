import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex   justify-center items-center space-x-4 my-8">
      <Link
        to="/movies"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold"
      >
        Movies
      </Link>
      <Link
        to="/series"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold"
      >
        Series
      </Link>
    </div>
  );
};

export default Home;
