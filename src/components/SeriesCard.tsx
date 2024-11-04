import React from "react";
import { Series } from "../types/series";

interface SeriesCardProps {
  series: Series;
}

const SeriesCard: React.FC<SeriesCardProps> = ({ series }) => {
  return (
    <div className="tv-series-card">
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
