import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "./swiper.css";
import { BASE_IMAGE_URL } from "../../utils/constants";
import { Link } from "react-router-dom";

function SliderTrendingMovie({ data, setActiveIndex }) {
  return (
    <div className="w-full mb-[50px] trending-movie">
      <div className="custom-navigation-buttons flex gap-[20px] w-[80%] mx-auto mt-[5px]">
        <div className="my-button-prev border border-[#ffffff5a] rounded-[4px]">
          <svg
            width="25"
            height="25"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M12 1.32373L2 10.7355L12 18.6767"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </div>
        <div className="my-button-next border border-[#ffffff5a] rounded-[4px]">
          <svg
            width="25"
            height="25"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.8"
              d="M2 1.32373L12 10.7355L2 18.6767"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </div>
      </div>

      <Swiper
        className="swiper-trending-movie"
        spaceBetween={25}
        modules={[Navigation, Autoplay]}
        // autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".my-button-next",
          prevEl: ".my-button-prev",
        }}
        loop
        slidesPerView={8}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {data.results.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={`movie/detail/${item.id}`}>
              <img src={`${BASE_IMAGE_URL}${item.poster_path}`} alt="picture" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderTrendingMovie;
