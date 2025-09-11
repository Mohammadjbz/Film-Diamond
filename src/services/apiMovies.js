import axios from "axios";
import findTrailer from "../helpers/findTrailer";

export function getMovies(endpoint) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${endpoint}`,
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2ZjYTUxODNjMTZhNDdiYzk5MjZlN2QwMTM3OGMzOSIsIm5iZiI6MTc1NDU1ODEyMC43NTEwMDAyLCJzdWIiOiI2ODk0NmVhODZlNmQ5M2RhOTk5OWE4ZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zTBYT-BrXo4MKpp8itszSCVecFy8ww4v3uD01CUIAEA",
    },
  };

  const movies = axios
    .request(options)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return movies;
}

export function getTrailerMovie(movieId) {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}/videos`,
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2ZjYTUxODNjMTZhNDdiYzk5MjZlN2QwMTM3OGMzOSIsIm5iZiI6MTc1NDU1ODEyMC43NTEwMDAyLCJzdWIiOiI2ODk0NmVhODZlNmQ5M2RhOTk5OWE4ZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zTBYT-BrXo4MKpp8itszSCVecFy8ww4v3uD01CUIAEA",
    },
  };

  const trailer = axios
    .request(options)
    .then((res) => findTrailer(res.data.results))
    .catch((err) => console.error(err));

  return trailer;
}
