import { FadeLoader } from "react-spinners";
import Button from "../../Ui/Button";
import { convertTime } from "../../helpers/convertTime";
import { calculateLength } from "../../helpers/calculateLength";
import shortenText from "../../helpers/shortenText";
import { Link } from "react-router-dom";

function HeroSection({ activeMovie, isTimeLoading, time }) {
  const titleLength = activeMovie?.title
    ? calculateLength(activeMovie?.title)
    : "small";

  const baseStyle = "font-bold leading-12 text-[#F7F7F7]";

  const titleStyle =
    titleLength === "long" ? "w-[100%]  text-4xl " : " w-[70%]  text-5xl ";

  if (isTimeLoading) {
    return (
      <div className="flex items-center justify-center w-[32.5rem] h-[23rem] mt-[70px] mb-[5px]">
        <FadeLoader
          color="#F5C51C"
          height={14}
          margin={5}
          loading
          radius={2}
          speedMultiplier={1}
          width={3}
        />
      </div>
    );
  }

  return (
    <div className="w-4/5 mt-[70px] mb-[5px]">
      <div className=" w-[32.5rem] h-[23rem] flex flex-col">
        <h1 className={`${baseStyle} ${titleStyle}`}>{activeMovie?.title}</h1>

        <div className="flex my-[18px] gap-[15px] items-center">
          <div className="flex gap-[7px] items-center">
            <span className="bg-[#F5C51C] font-bold py-[2px] px-[10px] rounded-[0.25rem]">
              IMDB
            </span>
            <div className="text-[#ffffffd1]">
              {activeMovie?.vote_average !== 0
                ? activeMovie?.vote_average.toFixed(1)
                : "No Rating"}
              <span className="text-[#ffffff84]">
                {" "}
                ({activeMovie?.vote_count})
              </span>
            </div>
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

          <div className="flex gap-[10px] text-[#ffffff84]">
            <span>{activeMovie?.release_date.slice(0, 4)}</span>
            <span>|</span>
            <span>{convertTime(time)}</span>
            <span>|</span>
            <span>{activeMovie?.original_language}</span>
          </div>
        </div>

        <p className="text-[#FFFFFF] text-[15px]">
          {shortenText(activeMovie?.overview)}
        </p>

        <div className="flex gap-[35px] mt-[22px]">
          <Link to={`/movie/trailer/${activeMovie?.id}`}>
            <Button
              borderColor="border-white"
              border="border"
              txtColor="text-white"
              hoverStyle="hover:bg-[#44434161] transition-all ease-in-out diration-100"
            >
              watch trailer
            </Button>
          </Link>

          <Link to={`/movie/detail/${activeMovie?.id}`}>
            <Button bgColor="bg-[#F5C61C]" hoverStyle="hover:bg-[#ffc800] transition-all ease-in-out diration-100">
              <svg
                width="13"
                height="18"
                viewBox="0 0 11 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.5 15.4839V0.483887L10.5002 7.74983L0.5 15.4839Z"
                  fill="#2E2E2E"
                />
              </svg>
              <span>watch now</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
