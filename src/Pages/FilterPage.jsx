import { useQuery } from "@tanstack/react-query";
import getFilteredData from "../services/apiDiscover";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { useSearchParams } from "react-router-dom";
import FilteredItem from "../features/Filter/FilteredItem";
import { useState } from "react";
import Pagination from "../features/Filter/Pagination";
import SortingFiltered from "../features/Filter/SortingFiltered";
import FilterOption from "../features/Filter/FilterOption";
import convertSortUrl from "../helpers/convertSortUrl";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const INITIAL_RANGE = [1970, currentYear];

function FilterPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    searchParams.get("page") || "1"
  );
  const [sort, setSort] = useState(
    convertSortUrl(searchParams.get("sort")) || "popularity.desc"
  );
  const [language, setLanguage] = useState(
    searchParams.get("language") || "en"
  );
  const [rangeValue, setRangeValue] = useState(
    searchParams.get("release-range")?.split("-") || INITIAL_RANGE
  );
  const [filter, setFilter] = useState(`${language}${rangeValue}`);
  const type = searchParams.get("type");
  const genre = searchParams.get("genre");

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["filter", type, genre, currentPage, sort, filter],
    queryFn: () =>
      getFilteredData(type, genre, currentPage, sort, language, rangeValue),
  });

  const totalPages = data?.total_pages || 0;

  return (
    <div className="text-white w-[80%] bg-gray-800">
      <div className="flex">
        <SortingFiltered setSort={setSort} />
        <FilterOption
          language={language}
          setLanguage={setLanguage}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          setFilter={setFilter}
        />
      </div>
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
