import { useQuery } from "@tanstack/react-query";
import getCredits from "../services/apiCredits";
import { useParams } from "react-router-dom";

export function useCredits(type) {
  const { movieSeriesId } = useParams();

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ["credits", movieSeriesId, type],
    queryFn: () => getCredits(movieSeriesId, type),
  });

  return { data, isLoading, isSuccess, isError };
}
