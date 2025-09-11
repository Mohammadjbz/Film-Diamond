import { useParams } from "react-router-dom";
import { getTrailerMovie } from "../services/apiMovies";
import { useQuery } from "@tanstack/react-query";

import FullPageSpinner from "../Ui/FullPageSpinner";

function MovieTrailerPage() {
  const { movieSeriesId } = useParams();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["trailer"],
    queryFn: () => getTrailerMovie(movieSeriesId),
  });

  if (isLoading) return <FullPageSpinner />;

  if (isSuccess)
    return (
      <iframe
        className="mt-[20px] rounded-[15px]"
        width="80%"
        height="500"
        src={data}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );

  return null;
}

export default MovieTrailerPage;
