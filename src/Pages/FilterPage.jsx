import { useQuery } from "@tanstack/react-query";
import getFilteredData from "../services/apiDiscover";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { useSearchParams } from "react-router-dom";
import FilteredItem from "../features/Filter/FilteredItem";
import { useState } from "react";
import Pagination from "../features/Filter/Pagination";
import SortingFiltered from "../features/Filter/SortingFiltered";

function FilterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("popularity.desc");
  const type = searchParams.get("type");
  const genre = searchParams.get("genre");

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["filter", type, genre, currentPage, sort],
    queryFn: () => getFilteredData(type, genre, currentPage, sort),
  });

  const totalPages = data?.total_pages || 0;
  console.log(data);

  return (
    <div className="text-white">
      <SortingFiltered setSort={setSort} />
      {isLoading ? (
        <FullPageSpinner />
      ) : (
        <>
          <FilteredItem data={data.results} />
          <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </>
      )}
    </div>
  );
}

export default FilterPage;
