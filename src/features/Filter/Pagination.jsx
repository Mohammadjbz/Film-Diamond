import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";

function Pagination({ totalPages, setCurrentPage }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPageFromUrl = Number(searchParams.get("page")) || 1;
  const initialPage = currentPageFromUrl - 1;

  function handlePageClick(event) {
    const selectedPage = event.selected + 1;
    setCurrentPage(selectedPage);
    searchParams.set("page", selectedPage);
    setSearchParams(searchParams);
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      onPageChange={handlePageClick}
      forcePage={initialPage}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={totalPages > 500 ? 500 : Number(totalPages)}
      previousLabel="< Previous"
      renderOnZeroPageCount={null}
      containerClassName="flex gap-2 justify-center mt-8 mb-10"
      pageClassName="px-3 py-1 border rounded cursor-pointer"
      activeClassName="bg-blue-500 text-white"
      previousClassName="px-3 py-1 border rounded cursor-pointer"
      nextClassName="px-3 py-1 border rounded cursor-pointer"
      breakClassName="px-3 py-1"
    />
  );
}

export default Pagination;
