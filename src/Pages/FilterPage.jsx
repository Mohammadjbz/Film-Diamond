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

const GENERE_NAMES = {
  movie: [
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
  tv: [
    {
      id: 10759,
      name: "Action & Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 10762,
      name: "Kids",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10763,
      name: "News",
    },
    {
      id: 10764,
      name: "Reality",
    },
    {
      id: 10765,
      name: "Sci-Fi & Fantasy",
    },
    {
      id: 10766,
      name: "Soap",
    },
    {
      id: 10767,
      name: "Talk",
    },
    {
      id: 10768,
      name: "War & Politics",
    },
    {
      id: 37,
      name: "Western",
    },
  ],
};

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
     refetchOnWindowFocus: false,
  });

  const totalPages = data?.total_pages || 0;
  const findGenreName = GENERE_NAMES[type]?.filter(
    (item) => item.id === Number(genre)
  );

  console.log(GENERE_NAMES[type]);

  return (
    <div className="text-white w-[80%] ">
      <div className="flex justify-between mt-6">
        <FilterOption
          language={language}
          setLanguage={setLanguage}
          rangeValue={rangeValue}
          setRangeValue={setRangeValue}
          setFilter={setFilter}
          type={type}
        />
        <SortingFiltered setSort={setSort} />
      </div>

      {isLoading ? (
        <FullPageSpinner />
      ) : (
        <>
          <h1 className="text-[#ffffffb7] font-bold text-[1.5rem] mt-[-80px] mb-2">
            {findGenreName[0].name} {type}
          </h1>
          <FilteredItem data={data.results} />
          <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </>
      )}
    </div>
  );
}

export default FilterPage;
