import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import "../features/TrendingMovie/swiper.css";
import { useState } from "react";
import { BASE_IMAGE_URL } from "../utils/constants";
import titleManagement from "../helpers/titleManagement";
import { Link } from "react-router-dom";
import percentage from "../helpers/calculatePercentage";
import convertDate from "../helpers/convertDate";
import getColor from "../helpers/styleHelper";

const hoverNextPrev =
  "hover:bg-[#ffffff2d] transition-all ease-in-out duration-150";

function Slider({ data, isLoading = false, uniqKey, type }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevClass = `my-button-prev-${uniqKey}`;
  const nextClass = `my-button-next-${uniqKey}`;

  return (
    <>
      <div className="custom-navigation-buttons flex gap-[20px] mt-[40px] mb-[10px] w-[80%] mx-auto">
        <div
          className={`${prevClass} ${hoverNextPrev} my-button-prev cursor-pointer border border-2 border-[#ffffff5a] rounded-[50%]`}
        >
          <svg
            width="26"
            height="22"
            viewBox="0 0 15 20"
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
        <div
          className={`${nextClass} ${hoverNextPrev} my-button-next cursor-pointer border border-2 border-[#ffffff5a] rounded-[50%]`}
        >
          <svg
            width="26"
            height="22"
            viewBox="0 0 12 20"
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
        spaceBetween={28}
        modules={[Navigation, Autoplay]}
        // autoplay={{ delay: 2000 }}
        navigation={{
          nextEl: `.${nextClass}`,
          prevEl: `.${prevClass}`,
        }}
        loop
        slidesPerView={6}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {!isLoading &&
          data?.results?.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/${type}/detail/${item.id}`}>
                <div className="flex flex-col">
                  <div className="flex flex-col relative">
                    <img
                      src={`${BASE_IMAGE_URL}${item.poster_path}`}
                      alt="picture"
                      className="rounded-[12px]"
                    />

                    <span
                      style={{
                        display: `${
                          item.vote_average === 0 || item.vote_average === 10
                            ? "none"
                            : "block"
                        }`,
                      }}
                      className="text-[9px] text-[#000000] font-bold z-2 absolute bottom-[-1px] left-[41px]"
                    >
                      %
                    </span>
                    <div
                      style={{ background: getColor(item.vote_average) }}
                      className="rounded-[50%] w-[41px] h-[41px] absolute left-[12px] bottom-[-17px]"
                    >
                      <span className="bg-[#91908e]  text-[#000000] rounded-[50%] w-[35px] h-[35px] text-[15px] font-bold text-center leading-[35px] absolute left-[3px] top-[3px]">
                        {percentage(item.vote_average)}
                      </span>
                    </div>
                  </div>

                  <span className="text-white mt-[1.2rem] ml-[12px]">
                    {titleManagement(item.title || item.name)}
                  </span>
                  <span className="text-[#AAAAAA] ml-[12px]">
                    {convertDate(item.release_date || item.first_air_date)}
                  </span>
                </div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}

export default Slider;
