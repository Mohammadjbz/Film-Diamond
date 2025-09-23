import ReactPaginate from "react-paginate";

function Pagination({ totalPages, setCurrentPage }) {
  function handlePageClick(event) {
    setCurrentPage(event.selected + 1);
  }

  return (
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
  );
}

export default Pagination;
