import { useQuery } from "@tanstack/react-query";
import getFilteredData from "../services/apiDiscover";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { useSearchParams } from "react-router-dom";
import FilteredItem from "../features/Filter/FilteredItem";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function FilterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage,setCurrentPage] = useState(1)
  const type = searchParams.get("type");
  const genre = searchParams.get("genre");
  
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["filter",type,genre,currentPage],
    queryFn: () => getFilteredData(type, genre,currentPage),
  });

    const totalPages = data?.total_pages || 0;
    console.log(data)

  function handlePageClick(event){
    setCurrentPage(event.selected+1)
  }

  if (isLoading) return <FullPageSpinner />;

  if (isSuccess)
    return (
      <div className="text-white">
        <FilteredItem data={data.results}/>
        <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages > 500 ? 500 : Number(totalPages)}
        previousLabel="< Previos"
        renderOnZeroPageCount={null}
        containerClassName="flex gap-2 justify-center mt-4"
        pageClassName="px-3 py-1 border rounded cursor-pointer"
        activeClassName="bg-blue-500 text-white"
        previousClassName="px-3 py-1 border rounded cursor-pointer"
        nextClassName="px-3 py-1 border rounded cursor-pointer"
        breakClassName="px-3 py-1"
      />
      </div>
    );
}

export default FilterPage;
