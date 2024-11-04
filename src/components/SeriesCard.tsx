import React from "react";
import { Series } from "../types/series";

interface SeriesCardProps {
  series: Series;
}

const SeriesCard: React.FC<SeriesCardProps> = ({ series }) => {
  return (
    <div className="h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 transition-transform transform hover:scale-105 hover:shadow-xl">
      {series.poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
          alt={series.name}
        />
      ) : (
        <div className="placeholder">No Image Available</div>
      )}
      <h3>{series.name}</h3>
      <p>{series.overview}</p>
    </div>
  );
};
export default SeriesCard;
