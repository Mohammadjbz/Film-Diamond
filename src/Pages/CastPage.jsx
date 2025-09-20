import { useQuery } from "@tanstack/react-query";
import getCredits from "../services/apiCredits";
import { Link, useParams } from "react-router-dom";
import { BASE_IMAGE_URL } from "../utils/constants";
import FullPageSpinner from "../Ui/FullPageSpinner";

function CastPage({type}) {
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
      <div className="flex gap-60 w-[80%]">
        <div>
          {creditsData?.cast.map((item) => (
            <Link key={item.id} to={`/person/${item.id}`} className="flex">
              <img
                src={`${BASE_IMAGE_URL}${item.profile_path}`}
                className="w-[66px] h-[66px] object-cover"
              />
              <div className="text-white flex flex-col">
                <span>{item.name}</span>
                <span>{item.character}</span>
              </div>
            </Link>
          ))}
        </div>

        <div>
          {creditsData?.crew.map((item) => (
            <Link to={`/person/${item.id}`} key={item.credit_id} className="flex">
              <img
                src={`${BASE_IMAGE_URL}${item.profile_path}` || ""}
                className="w-[66px] h-[66px] object-cover"
              />
              <div className="text-white flex flex-col">
                <span>{item.name}</span>
                <span>{item.job}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
}

export default CastPage;
