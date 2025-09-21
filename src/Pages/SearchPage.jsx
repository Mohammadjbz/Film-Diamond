import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import getSearchData from "../services/apiSearch";
import FullPageSpinner from "../Ui/FullPageSpinner";
import { BASE_IMAGE_URL } from "../utils/constants";
import { Link } from "react-router-dom";

function SearchPage() {
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState("all");

  const inputRef = useRef(null);

  useEffect(function () {
    inputRef.current.focus();
  }, []);

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["searchData", searchValue],
    queryFn: () => getSearchData(searchValue),
  });

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
    <div className="bg-red-900">
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {isLoading ? (
        <FullPageSpinner />
      ) : (
        <div>
          <div className="flex gap-10">
            <button onClick={() => setFilter("all")}>all</button>
            <button onClick={() => setFilter("movie")}>movie</button>
            <button onClick={() => setFilter("tv")}>tv</button>
            <button onClick={() => setFilter("person")}>person</button>
          </div>

          {filteredData?.map((item) => (
            <Link
              to={createRoute(item.media_type, item.id)}
              className="text-white"
              key={item.id}
            >
              <img
                src={`${BASE_IMAGE_URL}${
                  item.poster_path || item.profile_path
                }`}
                className="w-[50px]"
              />
              <span>{item.title || item.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
