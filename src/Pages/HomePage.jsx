import { useQuery } from "@tanstack/react-query";
import HeroSection from "../features/TrendingMovie/HeroSection";
import SliderTrendingMovie from "../features/TrendingMovie/SliderTrendingMovie";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { getTimeMovie } from "../services/apiTrendingMovie";
import { useTrendingMovies } from "../hooks/useTrendingMovies";
import ErrorMessage from "../Ui/ErrorMessage";

function HomePage({ activeIndex, setActiveIndex }) {
  const {
    data,
    isLoading: isTrendingLoading,
    isError,
  } = useTrendingMovies(activeIndex);

  const activeMovieId = data?.results[activeIndex]?.id;

  const { data: timeMovie, isLoading: isTimeLoading } = useQuery({
    queryKey: ["runTime", activeMovieId],
    queryFn: () => getTimeMovie(activeMovieId),
    enabled: !!activeMovieId,
  });

  const activeMovie = data?.results[activeIndex] || null;

  if (isTrendingLoading) return <FullPageSpinner />;

  return (
    <>
      {isError ? (
        <ErrorMessage text="Something went wrong! Please try again later." />
      ) : (
        <>
          <HeroSection
            activeMovie={activeMovie}
            isTimeLoading={isTimeLoading}
            time={timeMovie}
          />
          <SliderTrendingMovie data={data} setActiveIndex={setActiveIndex} />
        </>
      )}
    </>
  );
}

export default HomePage;
