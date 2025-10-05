import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import getPersonDetail from "../services/apiPerson";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { BASE_IMAGE_URL } from "../utils/constants";
import getBestEffects from "../services/apiKnownFor";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import PlaceHolderImage from "../Ui/PlaceHolderImage";

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
    .slice(0, 6);

  console.log(personData);

  if (isLoadingPersonData && isLoadingEffectsData) return <FullPageSpinner />;

  if (isSuccessPersonData && isSuccessEffectsData)
    return (
      <div className="text-white flex flex-col w-[80%]">
        <div className="flex items-center h-[530px] gap-10">
          <img
            src={
              personData?.profile_path
                ? `${BASE_IMAGE_URL}${personData?.profile_path}`
                : "https://placehold.co/296x445?text=No+Image&font=opensans"
            }
            className="w-[35%] h-[84%] rounded-[10px]"
          />

          <div className="flex flex-col justify-around h-[84%]">
            <div>
              <div className="mb-2">
                <span className="font-bold text-lg text-[#eedf11]">Name:</span>
                <span className="font-bold ml-2 text-[#df5e5e]">
                  {personData?.name}
                </span>
              </div>

              <div>
                <span className="font-semibold text-[#fffffff2]">
                  birthday:
                </span>
                <span className="font-semibold ml-2 text-[#ffffffd8]">
                  {personData?.birthday ? personData?.birthday : "No Data!"}
                </span>
              </div>

              <div>
                <span className="font-semibold text-[#fffffff2]">
                  place of birthday:
                </span>
                <span className="italic ml-2 text-[#ffffffd8]">
                  {personData?.place_of_birth
                    ? personData?.place_of_birth
                    : "No Data!"}
                </span>
              </div>

              <div>
                <span className="font-semibold text-[#fffffff2]">job:</span>
                <span className="font-semibold ml-2 text-[#ffffffd8]">
                  {personData?.known_for_department
                    ? personData?.known_for_department
                    : "No Data!"}
                </span>
              </div>
            </div>

            <div>
              <span className="font-bold text-[#ffffffd8]">biography:</span>
              <div className="flex flex-col h-60 overflow-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
                <span className="text-sm font-semibold  text-[#a1a0a0]">
                  {personData?.biography
                    ? personData?.biography
                    : "There is no biography!"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4 text-xl">known for</h3>

          <div className="flex gap-4">
            {bestEffects?.map((item) => (
              <Link
                to={`/${item.media_type === "tv" ? "series" : "movie"}/detail/${
                  item.id
                }`}
                key={item.credit_id}
                className="w-[16%]"
              >
                <img
                  src={`${BASE_IMAGE_URL}${item.poster_path}`}
                  className="rounded-[0.4rem]"
                />
                <span className="text-sm mt-2 block">
                  {item.name || item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
}

export default PersonDetailPage;
