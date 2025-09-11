import { useQueries } from "@tanstack/react-query";
import { getMovies } from "../services/apiMovies";
import FullPageSpinner from "../Ui/FullPageSpinner";
import Slider from "../Ui/Slider";

const queryKeys = ["Now Playing", "Popular", "Top Rated", "Upcoming"];

function MoviePage() {
  const queryResults = useQueries({
    queries: [
      { queryKey: ["nowPlaying"], queryFn: () => getMovies("now_playing") },
      { queryKey: ["popular"], queryFn: () => getMovies("popular") },
      { queryKey: ["top_rated"], queryFn: () => getMovies("top_rated") },
      { queryKey: ["upcoming"], queryFn: () => getMovies("upcoming") },
    ],
  });

  const isLoading = queryResults.some((result) => result.isLoading);
  const isSuccess = queryResults.every((result) => result.isSuccess);
  const isError = queryResults.some((result) => result.isError);

  // console.log(queryResults);

  if (isError) {
    return <div>An error occurred while fetching movies.</div>;
  }

  if (isLoading) return <FullPageSpinner />;

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
            <Slider data={result.data} uniqKey={index} type="movie" />
          </div>
        ))}
      </>
    );
}

export default MoviePage;
