import { useQuery } from "@tanstack/react-query";
import { getPopularShows } from "../services/api";
import type { Series } from "../types/series";
import SeriesCard from "../components/SeriesCard";

const Series = () => {
  const {
    data: series,
    error,
    isLoading,
  } = useQuery<Series[], Error>({
    queryKey: ["getPopularShows"],
    queryFn: getPopularShows,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching movies: {error.message}</div>;
  }

  return (
    <div className="p-4">
      {" "}
      <h2>Popular TV Shows</h2>
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-4">
          {series
            ?.filter((Show) => Show.poster_path && Show.name && Show.overview)
            .map((Show) => (
              <SeriesCard key={Show.id} series={Show} />
            ))}
        </div>
      }
    </div>
  );
};

export default Series;
