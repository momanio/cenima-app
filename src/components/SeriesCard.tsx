import React from "react";
import { Series } from "../types/series";
import { Link } from "react-router-dom";

interface SeriesCardProps {
  series: Series;
}

const SeriesCard: React.FC<SeriesCardProps> = ({ series }) => {
  return (
    <div className="h-full w-full bg-gray-400 pt-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-xl">
      {series.poster_path ? (
        <Link to={`/series/${series.id}`} className="block">
          <img
            src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
            alt={series.name}
          />
        </Link>
      ) : (
        <div className="placeholder">No Image Available</div>
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {series.name}
        </h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
          {series.overview}
        </p>
      </div>
    </div>
  );
};
export default SeriesCard;
