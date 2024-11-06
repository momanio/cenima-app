import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-xl">
      <Link to={`/movies/${movie.id}`} className="block">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover rounded-t-md"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {movie.title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
