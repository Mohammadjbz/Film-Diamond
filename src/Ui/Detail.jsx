import MovieDetail from "../features/Movies/MovieDetail";
import SeriesDetail from "../features/Series/SeriesDetail";

function Detail({ type }) {
  if (type === "movie") return <MovieDetail />;
  if (type === "tv") return <SeriesDetail />;
}

export default Detail;
