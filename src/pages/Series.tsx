import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { getPopularShows } from "../services/api";
import type { Series } from "../types/series";
import SeriesCard from "../components/SeriesCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Link } from "react-router-dom";

const Series = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const {
    data: series,
    error,
    isLoading,
  } = useQuery<Series[], Error>({
    queryKey: ["getPopularShows"],
    queryFn: getPopularShows,
  });

  useEffect(() => {
    if (mainSwiperRef.current && thumbsSwiper) {
      mainSwiperRef.current.thumbs.swiper = thumbsSwiper;
      mainSwiperRef.current.update();
    }
  }, [thumbsSwiper]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching series: {error.message}</div>;

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
          {series?.map((serie) => (
            <SwiperSlide key={serie.id} className="rounded-lg overflow-hidden">
              <img
                src={`https://image.tmdb.org/t/p/w200${serie.backdrop_path}`}
                alt={serie.name}
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
          {series?.map((serie) => (
            <SwiperSlide key={serie.id} className="rounded-lg overflow-hidden">
              <Link to={`/series/${serie.id}`} className="block">
                <img
                  src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                  alt={serie.name}
                  className="w-full h-auto object-cover rounded-lg opacity-70 hover:opacity-100 transition duration-300"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Series;
