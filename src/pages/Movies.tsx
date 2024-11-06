import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types/movie";
import { getPopularMovies } from "../services/api";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Movies = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching movies: {error.message}</div>;

  return (
    <div className="bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-8">Popular Movies</h2>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mainSwiper mb-8"
          onInit={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id} className="rounded-lg overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-auto object-cover rounded-lg opacity-70 hover:opacity-100 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="thumbsSwiper"
        >
          {movies?.map((movie) => (
            <SwiperSlide key={movie.id} className="rounded-lg overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto object-cover rounded-lg opacity-70 hover:opacity-100 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Movies;
