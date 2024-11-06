import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getShowDetails } from "../services/api";
import { Series } from "../types/series";

const TvSeriesDetails: React.FC = () => {
  const { seriesId } = useParams<{ seriesId: string }>();
  const [series, setSeries] = useState<Series | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      if (seriesId) {
        const seriesData = await getShowDetails(parseInt(seriesId));
        setSeries(seriesData);
        setLoading(false);
      }
    }
    fetchDetails();
  }, [seriesId]);

  if (loading) return <div>Loading...</div>;
  if (!series) return <div>series not found.</div>;

  return (
    <div className="series-details p-4">
      <h1 className="text-2xl font-bold">{series.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${series.poster_path}`}
        alt={series.name}
        className="my-4"
      />
      <p className="mt-2 text-lg">{series.overview}</p>
      <p>
        <strong>Release Date:</strong>
      </p>
      <p>
        <strong>Rating:</strong>
      </p>
    </div>
  );
};

export default TvSeriesDetails;
