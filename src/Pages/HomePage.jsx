import { useQuery } from "@tanstack/react-query";
import HeroSection from "../features/TrendingMovie/HeroSection";
import SliderTrendingMovie from "../features/TrendingMovie/SliderTrendingMovie";
import FullPageSpinner from "../Ui/FullPageSpinner"
import { getTimeMovie } from "../services/apiTrendingMovie";
import { useTrendingMovies } from "../hooks/useTrendingMovies";

function HomePage({ activeIndex, setActiveIndex }) {
  const { data, isLoading: isTrendingLoading, error } = useTrendingMovies();

  const activeMovieId = data?.results[activeIndex]?.id;

  const { data: timeMovie, isLoading: isTimeLoading } = useQuery({
    queryKey: ["runTime", activeMovieId],
    queryFn: () => getTimeMovie(activeMovieId),
    enabled: !!activeMovieId,
  });

  const activeMovie = data?.results[activeIndex] || null;

  if(isTrendingLoading || isTimeLoading) return <FullPageSpinner/>

  return (
    <>
      <HeroSection
        activeMovie={activeMovie}
        isTrendingLoading={isTrendingLoading}
        isTimeLoading={isTimeLoading}
        time={timeMovie}
      />
      <SliderTrendingMovie
        data={data}
        isLoading={isTrendingLoading}
        setActiveIndex={setActiveIndex}
      />
    </>
  );
}

export default HomePage;
