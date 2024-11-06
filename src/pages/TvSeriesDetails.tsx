import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowDetails } from "../services/api";
import { Series } from "../types/series";
import { Season } from "../types/season";

import { useQuery } from "@tanstack/react-query";

const TvSeriesDetails: React.FC = () => {
  const { seriesId } = useParams<{ seriesId: string }>();

  const {
    data: series,
    isLoading,
    isError,
  } = useQuery<Series>({
    queryKey: ["seriesDetails", seriesId],
    queryFn: () => getShowDetails(parseInt(seriesId!)),
    enabled: !!seriesId,
  });

  // Manage active season selection and background poster
  const [activeSeriesPoster, setActiveSeriesPoster] = useState<string | null>(
    null
  );
  const [selectedSeason, setSelectedSeason] = useState<Season | null>(null);

  useEffect(() => {
    if (series) {
      setActiveSeriesPoster(series.poster_path || null);
      setSelectedSeason(series.seasons?.[0] || null);
    }
  }, [series]);

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const seasonNumber = parseInt(event.target.value);
    const season = series?.seasons.find(
      (s) => s.season_number === seasonNumber
    );
    setSelectedSeason(season || null);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !series) return <div>Series not found.</div>;

  return (
    <div
      className="p-40"
      style={{
        backgroundImage: activeSeriesPoster
          ? `url(https://image.tmdb.org/t/p/w500${activeSeriesPoster})`
          : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        opacity: 0.7,
      }}
    >
      <div className="flex flex-col items-start pt-60">
        <h1 className="text-6xl text-white font-bold">{series.name}</h1>

        <p className="mt-2 text-xl font-bold">{series.overview}</p>
        <div className="flex flex-row space-x-4 mt-2">
          <p className="text-lg font-extrabold">
            {series.vote_average} | {series.vote_count}
          </p>
          <p className="text-lg font-extrabold">
            {series.number_of_episodes} episodes
          </p>
          <p className="text-lg font-extrabold">{series.first_air_date}</p>
        </div>

        <p className="mt-2">
          {series.genres.map((genre) => (
            <span key={genre.id} className="ml-2 font-extrabold">
              {genre.name}
              {" . "}
            </span>
          ))}
        </p>

        <div className="mt-6">
          <select
            id="season-select"
            className="bg-gray-800 text-white p-2 rounded"
            value={selectedSeason?.season_number || ""}
            onChange={handleSeasonChange}
          >
            {series.seasons.map((season) => (
              <option key={season.id} value={season.season_number}>
                Season {season.season_number}
              </option>
            ))}
          </select>
        </div>

        {selectedSeason && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold">
              Episodes for {selectedSeason.name}
            </h2>
            <ul className="mt-4 space-y-2">
              {selectedSeason.episodes?.map((episode) => (
                <li key={episode.id} className="border-b border-gray-600 pb-2">
                  <span className="font-semibold">{episode.name}</span> -{" "}
                  {episode.air_date}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TvSeriesDetails;
