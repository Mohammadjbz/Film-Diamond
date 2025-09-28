import axios from "axios";

export default function getFilteredData(
  type,
  genre,
  page,
  sort,
  language,
  rangeValue
) {
  const dateGte = type === "tv" ? "air_date.gte" : "primary_release_date.gte";
  const dateLte = type === "tv" ? "air_date.lte" : "primary_release_date.lte";

  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/${type}`,
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: page,
      sort_by: sort,
      with_genres: genre,
      with_original_language: language,
      [dateGte]: `${rangeValue[0]}-01-01`,
      [dateLte]: `${rangeValue[1]}-12-31`,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2ZjYTUxODNjMTZhNDdiYzk5MjZlN2QwMTM3OGMzOSIsIm5iZiI6MTc1NDU1ODEyMC43NTEwMDAyLCJzdWIiOiI2ODk0NmVhODZlNmQ5M2RhOTk5OWE4ZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zTBYT-BrXo4MKpp8itszSCVecFy8ww4v3uD01CUIAEA",
    },
  };

  const result = axios
    .request(options)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return result;
}
