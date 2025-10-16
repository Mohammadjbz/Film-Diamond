import { useQuery } from "@tanstack/react-query";
import apiTrendingMovies from "../services/apiTrendingMovie";

export function useTrendingMovies() {
  const { data, isLoading, error,isError } = useQuery({
    queryKey: ["trending"],
    queryFn: apiTrendingMovies,
  });

  return { data, isLoading, error,isError };
}
