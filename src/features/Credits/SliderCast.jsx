import { useCredits } from "../../hooks/useCredits";
import FullPageSpinner from "../../Ui/FullPageSpinner";
import { BASE_IMAGE_URL } from "../../utils/constants";

function SliderCast({type}) {
  const {
    data: creditsData,
    isLoading,
    isSuccess,
    isError,
  } = useCredits(type);

  if (isLoading) <FullPageSpinner />;

  if (isSuccess)
    return (
      <div>
        {creditsData.cast.map((actor, index) => {
          if (index < 10)
            return (
              <div key={actor.id}>
                <div>
                  <img
                    src={`${BASE_IMAGE_URL}${actor.profile_path}`}
                    className="w-[30px]"
                  />
                  <span>{actor.name}</span>
                  ----
                  <span>{actor.character}</span>
                </div>
              </div>
            );
        })}
      </div>
    );
}

export default SliderCast;
