import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import FullPageSpinner from "../Ui/FullPageSpinner";
import { getTrailer } from "../services/apiTrailer";

function TrailerPage({ type }) {
  const { movieSeriesId } = useParams();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["trailer", type, movieSeriesId],
    queryFn: () => getTrailer(movieSeriesId, type),
  });

  if (isLoading) return <FullPageSpinner />;

  if (isSuccess)
    return (
  <div>
      {data?<iframe
        className="mt-[20px] rounded-[15px]"
        width="80%"
        height="500"
        src={data}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>:<div className="text-white text-2xl font-bold mt-20">No trailer found!</div>}
        </div>
    );

  return null;
}

export default TrailerPage;
