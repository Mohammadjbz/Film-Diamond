import { useQuery } from "@tanstack/react-query";
import getFilteredData from "../services/apiDiscover";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { useSearchParams } from "react-router-dom";
import FilteredItem from "../features/Filter/FilteredItem";

function FilterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const genre = searchParams.get("genre");

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["filter",type,genre],
    queryFn: () => getFilteredData(type, genre),
  });

  if (isLoading) return <FullPageSpinner />;

  if (isSuccess)
    return (
      <div className="text-white">
        <FilteredItem data={data}/>
      </div>
    );
}

export default FilterPage;
