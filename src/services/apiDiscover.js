import axios from "axios";

export default function getFilteredData(type,genre,page) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/discover/${type}`,
    params: {
      include_adult: "false",
      include_video: "false",
      language: "en-US",
      page: page,
      sort_by: "popularity.desc",
      with_genres: genre,
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
