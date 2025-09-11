const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2ZjYTUxODNjMTZhNDdiYzk5MjZlN2QwMTM3OGMzOSIsIm5iZiI6MTc1NDU1ODEyMC43NTEwMDAyLCJzdWIiOiI2ODk0NmVhODZlNmQ5M2RhOTk5OWE4ZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zTBYT-BrXo4MKpp8itszSCVecFy8ww4v3uD01CUIAEA",
  },
};

function getTrendingMovies() {
  const data = fetch(
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
    options
  )
    .then((res) => res.json())
    .catch((err) => {
      console.error(err);
      return null;
    });

  return data;
}

export function getTimeMovie(movieId) {
  if (!movieId) return null;

  const data = fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  )
    .then((res) => res.json())
    .then((res) => res.runtime)
    .catch((err) => console.error(err));

  return data;
}

export default getTrendingMovies;
