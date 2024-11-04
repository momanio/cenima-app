import { useEffect, useState } from "react";
import { getPopularShows } from "../services/api";
import type { Series } from "../types/series";
import SeriesCard from "../components/SeriesCard";

const Series = () => {
  const [Shows, setShows] = useState<Series[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const ShowsData = await getPopularShows();
      console.log("Fetched TV Shows Data:", ShowsData);

      setShows(ShowsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      {" "}
      <h2>Popular TV Shows</h2>
      {
        <div className="tvshows-grid">
          {Shows.filter(
            (Show) => Show.poster_path && Show.name && Show.overview
          ).map((Show) => (
            <SeriesCard key={Show.id} series={Show} />
          ))}
        </div>
      }
    </div>
  );
};

export default Series;
