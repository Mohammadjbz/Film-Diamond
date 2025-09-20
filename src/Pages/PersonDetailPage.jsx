import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import getPersonDetail from "../services/apiPerson";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { BASE_IMAGE_URL } from "../utils/constants";
import getBestEffects from "../services/apiKnownFor";

function PersonDetailPage() {
  const { personId } = useParams();

  const {
    data: personData,
    isLoading: isLoadingPersonData,
    isSuccess: isSuccessPersonData,
  } = useQuery({
    queryKey: ["personDetail"],
    queryFn: () => getPersonDetail(personId),
  });

  const {
    data: effectsData,
    isLoading: isLoadingEffectsData,
    isSuccess: isSuccessEffectsData,
  } = useQuery({
    queryKey: ["bestEffects"],
    queryFn: () => getBestEffects(personId),
  });

  const bestEffects = effectsData?.cast
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 5);

  if (isLoadingPersonData && isLoadingEffectsData) return <FullPageSpinner />;

  if (isSuccessPersonData && isSuccessEffectsData)
    return (
      <div className="text-white flex flex-col">
        <span>{personData?.name}</span>
        <span>{personData?.biography}</span>
        <img
          src={`${BASE_IMAGE_URL}${personData?.profile_path}`}
          className="w-[200px]"
        />
        <span>known for</span>
        <div>
          {bestEffects?.map((item) => (
            <Link
              to={`/${item.media_type === "tv" ? "series" : "movie"}/detail/${
                item.id
              }`}
              key={item.credit_id}
            >
              <img
                src={`${BASE_IMAGE_URL}${item.poster_path}`}
                className="w-[100px]"
              />
              <span>{item.name || item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    );
}

export default PersonDetailPage;
