import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getSearchData from "../services/apiSearch";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { BASE_IMAGE_URL } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [value, setValue] = useState(searchParams.get("query") || "");
  const [category, setCategory] = useState("all");
  const inputRef = useRef(null);

  useEffect(function () {
    inputRef.current.focus();
  }, []);

  useEffect(
    function () {
      if (!query) return;
      searchParams.set("query", query);
      setSearchParams(searchParams);
    },
    [query, searchParams, setSearchParams]
  );

  function handleSearch(e) {
    e.preventDefault();

    const value = inputRef.current.value.trim();
    if (!value) return;
    setQuery(value);
  }

  function handleCategory(e) {
    setFilter(e.target.dataset.category);
    setCategory(e.target.dataset.category);
  }

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["searchData", query],
    queryFn: () => getSearchData(query),
    enabled: !!query,
  });

  console.log(data);

  const filteredData =
    filter === "all"
      ? data
      : data?.filter((item) => item.media_type === filter);

  function createRoute(type, id) {
    if (type === "tv") return `/series/detail/${id}`;
    if (type === "movie") return `/movie/detail/${id}`;
    if (type === "person") return `/person/${id}`;
    return null;
  }

  return (
    <div className="w-[80%] flex flex-col min-h-screen">
      <form className="relative mt-8" onSubmit={handleSearch}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          placeholder="Search for a movie, tv show, person ..."
          className="w-[100%] h-[35px] pl-3 text-white border border-[#d6dad7] rounded-[12px] placeholder-[#ececec] focus:outline-none focus:ring-1 focus:ring-[#ffffff50]"
        />

        <button
          onClick={handleSearch}
          className="text-white h-[35px] cursor-pointer transition-all duration-300 ease-in-out rounded-[12px] px-5 absolute right-0 bg-gradient-to-r 
          from-[#f1d261] 
          via-[#f3c933]
          to-[#f5c20b] 
          hover:text-[#272626]"
        >
          Search
        </button>
      </form>

      {isLoading ? (
        <FullPageSpinner />
      ) : (
        <div className="rounded-[10px] flex-1 mb-10 shadow-[2px_2px_15px_#edf05b49,-2px_-2px_15px_#edf05b49] px-8 mt-8">
          <div className="flex gap-4 my-8 text-white">
            <button
              data-category="all"
              onClick={handleCategory}
              className={`w-[7%] hover:text-black hover:font-semibold ${
                category === "all"
                  ? "hover:bg-yellow-400"
                  : "hover:bg-[#bdb9b9]"
              }  focus:text-black focus:font-semibold transition-all duration-500 ease-in-out  cursor-pointer rounded-[4px] py-1 ${
                category === "all"
                  ? "bg-yellow-500 font-semibold text-black"
                  : "bg-[#b1acace2]"
              }`}
            >
              all
            </button>
            <button
              data-category="movie"
              onClick={handleCategory}
              className={`w-[7%] hover:text-black hover:font-semibold  ${
                category === "movie"
                  ? "hover:bg-yellow-400"
                  : "hover:bg-[#bdb9b9]"
              } focus:text-black focus:font-semibold transition-all duration-500 ease-in-out cursor-pointer rounded-[4px] py-1 ${
                category === "movie"
                  ? "bg-yellow-500 font-semibold text-black"
                  : "bg-[#b1acace2]"
              }`}
            >
              movie
            </button>
            <button
              data-category="tv"
              onClick={handleCategory}
              className={`w-[7%] hover:text-black hover:font-semibold ${
                category === "tv" ? "hover:bg-yellow-400" : "hover:bg-[#bdb9b9]"
              } focus:text-black focus:font-semibold transition-all duration-500 ease-in-out  cursor-pointer rounded-[4px] py-1 ${
                category === "tv"
                  ? "bg-yellow-500 font-semibold text-black"
                  : "bg-[#b1acace2]"
              }`}
            >
              tv
            </button>
            <button
              data-category="person"
              onClick={handleCategory}
              className={`w-[7%] hover:text-black hover:font-semibold ${
                category === "person"
                  ? "hover:bg-yellow-400"
                  : "hover:bg-[#bdb9b9]"
              } focus:text-black focus:font-semibold transition-all duration-500 ease-in-out  cursor-pointer rounded-[4px] py-1 ${
                category === "person"
                  ? "bg-yellow-500 font-semibold text-black"
                  : "bg-[#b1acace2]"
              }`}
            >
              person
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-10">
            {filteredData?.length !== 0 ? (
              filteredData?.map((item) => (
                <Link
                  to={createRoute(item.media_type, item.id)}
                  className="text-white  rounded-[10px] text-center border border-2 border-[#e2b10e]"
                  key={item.id}
                >
                  <img
                    src={
                      item.poster_path || item.profile_path
                        ? `${BASE_IMAGE_URL}${
                            item.poster_path || item.profile_path
                          }`
                        : "https://placehold.co/268x403?text=No+Image&font=opensans"
                    }
                    className="rounded-tl-[8px] rounded-tr-[8px] border-b-2 border-[#e2b10e]"
                  />
                  <div className="bg-[#1b1a1a] rounded-bl-[8px] rounded-br-[8px] flex flex-col justify-center h-[55px] overflow-auto scrollbar-none [&::-webkit-scrollbar]:hidden">
                    <span className="text-[#e4dfd0] font-semibold">
                      {item.title || item.name}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <span className="text-white text-2xl font-bold">
                No results found!
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchPage;
