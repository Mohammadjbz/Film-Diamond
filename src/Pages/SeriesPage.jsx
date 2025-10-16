import { useQueries } from "@tanstack/react-query";
import { getSeries } from "../services/apiSeries";
import Slider from "../Ui/Slider";
import FullPageSpinner from "../Ui/FullPageSpinner";
import ErrorMessage from "../Ui/ErrorMessage";

const queryKeys = ["Airing Today", "On The Air", "Popular", "Top Rated"];

function SeriesPage() {
  const queryResults = useQueries({
    queries: [
      { queryKey: ["airingToday"], queryFn: () => getSeries("airing_today") },
      { queryKey: ["onTheAir"], queryFn: () => getSeries("on_the_air") },
      { queryKey: ["popular"], queryFn: () => getSeries("popular") },
      { queryKey: ["topRated"], queryFn: () => getSeries("top_rated") },
    ],
  });

  const isLoading = queryResults.some((result) => result.isLoading);
  const isSuccess = queryResults.every((result) => result.isSuccess);
  const isError = queryResults.some((result) => result.isError);

 

  
  if (isLoading) return <FullPageSpinner />;

  if (isError) {
    return <ErrorMessage text="An error occurred while fetching Series Page" redirect={true}/>
  }

  if (isSuccess)
    return (
      <>
        {queryResults.map((result, index) => (
          <div className="w-full mb-[-20px] mt-[40px] flex-col" key={index}>
             <div className="block w-[80%] mx-auto">
              <span className="text-white font-bold pb-[8px] text-xl border-b-2  border-white">
                {queryKeys[index]}
              </span>
            </div>
            <Slider data={result.data.data} uniqKey={index} type="series" />
          </div>
        ))}
      </>
    );
}

export default SeriesPage;
