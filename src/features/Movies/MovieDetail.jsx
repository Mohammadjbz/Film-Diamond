import { Link, useParams } from "react-router-dom";
import getDetail from "../../services/apiDetail";
import { useQuery } from "@tanstack/react-query";
import FullPageSpinner from "../../Ui/FullPageSpinner";
import { BASE_IMAGE_URL } from "../../utils/constants";
import findYear from "../../helpers/findYear";
import { convertTime } from "../../helpers/convertTime";
import percentage from "../../helpers/calculatePercentage";
import getColor from "../../helpers/styleHelper";
import getCredits from "../../services/apiCredits";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "../../Ui/detailSliderStyle.css";
import getSimilar from "../../services/apiSimilar";

function MovieDetail() {
  const { movieSeriesId } = useParams();

  const {
    data: movieData,
    isLoading: isLoadingMovieData,
    isSuccess: isSuccessMovieData,
    isError: isErrorMovieData,
  } = useQuery({
    queryKey: ["detailMovie", movieSeriesId],
    queryFn: () => getDetail(movieSeriesId, "movie"),
  });

  const {
    data: creditsData,
    isLoading: isLoadingCreditsData,
    isSuccess: isSuccessCreditsData,
    isError: isErrorCreditsData,
  } = useQuery({
    queryKey: ["creditsMovie", movieSeriesId],
    queryFn: () => getCredits(movieSeriesId, "movie"),
  });

  const {
    data: similarData,
    isLoading: isLoadingSimilarData,
    isSuccess: isSuccessSimilarData,
    isError: isErrorSimilarData,
  } = useQuery({
    queryKey: ["similarMovie", movieSeriesId],
    queryFn: () => getSimilar(movieSeriesId, "movie"),
  });

  console.log(similarData);

  if (isLoadingMovieData && isLoadingCreditsData) return <FullPageSpinner />;

  if (isSuccessMovieData && isSuccessCreditsData)
    return (
      <div>
        <div
          className="w-full h-[510px] border-2 "
          style={{
            backgroundImage: `linear-gradient(rgba(75, 75, 78, 0.651), rgba(75, 75, 78, 0.651)), url(${BASE_IMAGE_URL}${movieData.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "50vh",
          }}
        >
          <div className="w-[80%] h-[100%] mx-auto flex items-center gap-15">
            <img
              src={`${BASE_IMAGE_URL}${movieData.poster_path}`}
              className="w-[35%] h-[93%] rounded-[12px] border-3 border-yellow-500"
            />

            <div className="flex flex-col h-[93%]">
              <div className="flex gap-[0.4rem] mt-[1.2rem]">
                <span className="font-bold text-[2rem] text-[white]">
                  {movieData.title}
                </span>
                <span className="text-[#e4e3e3] text-[2rem]">
                  ({findYear(movieData.release_date)})
                </span>
              </div>

              <div className="flex items-center gap-2 text-[1rem] text-white">
                <span>
                  {movieData.release_date}({movieData.origin_country})
                </span>

                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.8" cx="2" cy="1.9917" r="2" fill="white" />
                </svg>

                <div>
                  {movieData.genres.map((item, index) => (
                    <span className="" key={item.id}>
                      {index !== 0 && ", "}
                      {item.name}
                    </span>
                  ))}
                </div>

                <svg
                  width="4"
                  height="4"
                  viewBox="0 0 4 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle opacity="0.8" cx="2" cy="1.9917" r="2" fill="white" />
                </svg>

                <span>{convertTime(movieData.runtime)}</span>
              </div>

              <div className="flex items-center gap-3 mt-5">
                <span className="text-white text-[1.5rem] font-bold">
                  User Score:
                </span>
                <div
                  style={{ background: getColor(movieData.vote_average) }}
                  className="rounded-[50%] flex items-center justify-center relative w-[60px] h-[60px] "
                >
                  <span
                    style={{
                      display: `${
                        movieData.vote_average === 0 ||
                        movieData.vote_average === 10
                          ? "none"
                          : "block"
                      }`,
                    }}
                    className="text-[0.5rem] text-[#000000] font-black z-2 absolute left-[42px] top-[16px]"
                  >
                    %
                  </span>

                  <span className="bg-[#91908e]  text-[#000000] rounded-[50%] w-[50px] h-[50px] text-[1.4rem] font-bold text-center leading-[47px] ">
                    {percentage(movieData.vote_average)}
                  </span>
                </div>
              </div>

              <div className="mt-2">
                <Link className="flex font-bold items-center gap-2">
                  <svg
                    width="13"
                    height="18"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.5 15.4839V0.483887L10.5002 7.74983L0.5 15.4839Z"
                      fill="#eec50f"
                    />
                  </svg>
                  <span className="text-[#eec50f]">Play Trailer</span>
                </Link>
              </div>

              <div className="text-white italic mt-3">{movieData.tagline}</div>

              <h3 className="font-bold text-[1.1rem] text-[white] mt-5">
                Overview
              </h3>
              <div className="text-[white] mt-2 h-70 overflow-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
                <span>{movieData.overview}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-slider w-[80%] mx-auto mt-[3rem]">
          <h3 className="text-white font-semibold mb-4 text-xl">
            Top Billed Cast
          </h3>

          <Swiper
            modules={[Scrollbar]}
            spaceBetween={20}
            slidesPerView={5}
            scrollbar={{ draggable: true, hide: false }}
          >
            {creditsData.cast?.slice(0, 6).map((item) => (
              <SwiperSlide key={item.id}>
                <Link to={`/person/${item.id}`} className="flex flex-col mb-10">
                  <img
                    src={`${BASE_IMAGE_URL}${item.profile_path}`}
                    className="w-full rounded-[0.4rem]"
                  />
                  <span className="text-white font-semibold ml-[10%] mt-3">
                    {item.name}
                  </span>
                  <span className="text-gray-500 ml-[10%] mt-1">
                    {item.character}
                  </span>
                </Link>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <Link
                to="cast"
                className="flex gap-2 mt-[120px] justify-center items-end"
              >
                <span className="text-white">View More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="white"
                    d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                  />
                </svg>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="detail-slider w-[80%] mx-auto mt-[3rem]">
          <h3 className="text-white font-semibold mb-4 text-xl">Similar</h3>

          <Swiper
            modules={[Scrollbar]}
            spaceBetween={20}
            slidesPerView={5}
            scrollbar={{ draggable: true, hide: false }}
          >
            {similarData?.slice(0, 6).map((item) => (
              <SwiperSlide key={item.id}>
                <Link
                  to={`/movie/detail/${item.id}`}
                  className="flex flex-col mb-10"
                >
                  <img
                    src={`${BASE_IMAGE_URL}${item.poster_path}`}
                    className="w-full h-[248px] rounded-[0.4rem]"
                  />
                  <span className="text-white font-semibold ml-[10%] mt-3">
                    {item.title}
                  </span>
                  <span className="text-gray-500 ml-[10%] mt-1">
                    {findYear(item.release_date)}
                  </span>
                </Link>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <Link className="flex gap-2 mt-[120px] justify-center items-end">
                <span className="text-white">View More</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20"
                  width="20"
                  viewBox="0 0 640 640"
                >
                  <path
                    fill="white"
                    d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                  />
                </svg>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
}

export default MovieDetail;

{
  /* <div className="bg-green-700 w-[80%] mx-auto">
        <img
          src={`${BASE_IMAGE_URL}${data.poster_path}`}
          className="w-[100px] h-[140px]"
        />
        <img
          src={`${BASE_IMAGE_URL}${data.backdrop_path}`}
          className="w-[100px] h-[140px]"
        />
        <div>
          {data.title}({data.release_date})
        </div>
        <div>
          {data.release_date}({data.origin_country}) .
        </div>
        <div>
          {data.genres.map((item, index) => (
            <span key={item.id}>
              {index !== 0 && ","}
              {item.name}
            </span>
          ))}
        </div>
        <div>{convertTime(data.runtime)}</div>
        <div>{data.tagline}</div>
        <h1>overview</h1>
        <div>{data.overview}</div>
        <span>user score</span>
        <span>{data.vote_average}</span>
      </div> */
}
