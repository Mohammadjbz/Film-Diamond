import { useQuery } from "@tanstack/react-query";
import getCredits from "../services/apiCredits";
import { Link, useParams } from "react-router-dom";
import { BASE_IMAGE_URL } from "../utils/constants";
import FullPageSpinner from "../Ui/FullPageSpinner";
import PlaceHolderImage from "../Ui/PlaceHolderImage";

function CastPage({ type }) {
  const { movieSeriesId } = useParams();

  const {
    data: creditsData,
    isLoading: isLoadingCreditsData,
    isSuccess: isSuccessCreditsData,
    isError: isErrorCreditsData,
  } = useQuery({
    queryKey: ["creditsMovieSeries"],
    queryFn: () => getCredits(movieSeriesId, type),
  });

  console.log(movieSeriesId);

  if (isLoadingCreditsData) return <FullPageSpinner />;

  if (isSuccessCreditsData)
    return (
      <div className="flex w-[80%] gap-5 mt-10 mb-5 bg-[#252222] rounded-[6px] py-2 border-3 border-double border-[#F5C51C]">
        <div className="flex flex-col gap-3 ml-4">
          <h3 className="font-bold text-xl tracking-wider text-[#ffffffef]">Cast</h3>
          {creditsData?.cast.map((item) => (
            <Link
              key={item.id}
              to={`/person/${item.id}`}
              className="flex items-center gap-4 w-fit"
            >
              {item.profile_path ? (
                <img
                  src={`${BASE_IMAGE_URL}${item.profile_path}`}
                  className="w-[66px] h-[66px] object-cover rounded-[6px]"
                />
              ) : (
                <PlaceHolderImage type="cast" />
              )}

              <div className="text-white flex flex-col gap-1">
                <span className="font-semibold">{item.name}</span>
                <span className="text-[#9e9797]">{item.character}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-xl tracking-wider text-[#ffffffef]">Crew</h3>
          {creditsData?.crew.map((item) => (
            <Link
              to={`/person/${item.id}`}
              key={item.credit_id}
              className="flex gap-4 items-center w-fit"
            >
              {item.profile_path ? (
                <img
                  src={`${BASE_IMAGE_URL}${item.profile_path}` || ""}
                  className="w-[66px] h-[66px] object-cover rounded-[6px]"
                />
              ) : (
                <PlaceHolderImage type="cast" />
              )}

              <div className="text-white flex flex-col gap-1">
                <span className="font-semibold">{item.name}</span>
                <span className="text-[#9e9797]">{item.job}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
}

export default CastPage;
