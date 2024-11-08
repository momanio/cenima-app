import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Welcome to Cenima!
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Explore the latest movies and TV series.
        </p>
      </div>
      <div className="flex space-x-4">
        <Link
          to="/movies"
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
        >
          Movies
        </Link>
        <Link
          to="/series"
          className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold shadow-md transition duration-300"
        >
          Series
        </Link>
      </div>
    </div>
  );
};

export default Home;
