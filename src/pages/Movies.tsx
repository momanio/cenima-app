import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types/movie";
import { getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";

const Movies = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const [activeMoviePoster, setActiveMoviePoster] = useState<string | null>(
    null
  );

  const {
    data: movies,
    error,
    isLoading,
  } = useQuery<Movie[], Error>({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  useEffect(() => {
    if (mainSwiperRef.current && thumbsSwiper) {
      mainSwiperRef.current.thumbs.swiper = thumbsSwiper;
      mainSwiperRef.current.update();
    }
  }, [thumbsSwiper]);

  useEffect(() => {
    setActiveMoviePoster(movies?.[0]?.poster_path || null);
  }, [movies]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching movies: {error.message}</div>;
  }

  return (
    <div
      style={{
        backgroundImage: activeMoviePoster
          ? `url(https://image.tmdb.org/t/p/w500${activeMoviePoster})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2>Popular Movies</h2>

      <Swiper
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        onInit={(swiper) => {
          mainSwiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveMoviePoster(
            movies?.[swiper.activeIndex]?.poster_path || null
          );
        }}
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {movies?.map((movie) => (
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Movies;
