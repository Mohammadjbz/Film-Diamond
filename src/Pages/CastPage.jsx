import { useQuery } from "@tanstack/react-query";
import getCredits from "../services/apiCredits";
import { useParams } from "react-router-dom";
import { BASE_IMAGE_URL } from "../utils/constants";
import FullPageSpinner from "../Ui/FullPageSpinner";

function CastPage() {
  const { movieSeriesId } = useParams();

  const {
    data: creditsData,
    isLoading: isLoadingCreditsData,
    isSuccess: isSuccessCreditsData,
    isError: isErrorCreditsData,
  } = useQuery({
    queryKey: ["creditsMovie"],
    queryFn: () => getCredits(movieSeriesId, "movie"),
  });

  console.log(movieSeriesId);

  if (isLoadingCreditsData) return <FullPageSpinner />;

  if (isSuccessCreditsData)
    return (
      <div className="flex gap-60 w-[80%]">
        <div>
          {creditsData?.cast.map((item) => (
            <div key={item.id} className="flex">
              <img
                src={`${BASE_IMAGE_URL}${item.profile_path}`}
                className="w-[66px] h-[66px] object-cover"
              />
              <div className="text-white flex flex-col">
                <span>{item.name}</span>
                <span>{item.character}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          {creditsData?.crew.map((item) => (
            <div key={item.credit_id} className="flex">
              <img
                src={`${BASE_IMAGE_URL}${item.profile_path}` || ""}
                className="w-[66px] h-[66px] object-cover"
              />
              <div className="text-white flex flex-col">
                <span>{item.name}</span>
                <span>{item.job}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default CastPage;
