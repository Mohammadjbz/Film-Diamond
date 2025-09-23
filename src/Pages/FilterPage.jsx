import { useQuery } from "@tanstack/react-query";
import getFilteredData from "../services/apiDiscover";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { useSearchParams } from "react-router-dom";
import FilteredItem from "../features/Filter/FilteredItem";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Pagination from "../features/Filter/Pagination";

function FilterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const type = searchParams.get("type");
  const genre = searchParams.get("genre");

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["filter", type, genre, currentPage],
    queryFn: () => getFilteredData(type, genre, currentPage),
  });

  const totalPages = data?.total_pages || 0;
  console.log(data);

  if (isLoading) return <FullPageSpinner />;

  if (isSuccess)
    return (
      <div className="text-white">
        <FilteredItem data={data.results} />
        <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage}/>
      </div>
    );
}

export default FilterPage;
