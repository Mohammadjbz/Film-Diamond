import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function SortingFiltered({ setSort }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showSortList, setShowSortList] = useState(false);
  const type = searchParams.get("type");

  function handleClick(e) {
    const value = e.target.dataset.sort;
    setSort(value);
    setShowSortList(false);

    const map = {
      "popularity.desc": "popularity-desc",
      "popularity.asc": "popularity-asc",
      "vote_average.desc": "rating-desc",
      "vote_average.asc": "rating-asc",
      "first_air_date.desc": "first-date-desc",
      "primary_release_date.desc": "release-date-desc",
      "first_air_date.asc": "first-date-asc",
      "primary_release_date.asc": "release-date-asc",
    };

    searchParams.set("sort", map[value]);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <button onClick={() => setShowSortList((prev) => !prev)}>
        Sorting By
      </button>
      {showSortList && (
        <ul>
          <li>
            <button data-sort="popularity.desc" onClick={handleClick}>
              Popularity Descending
            </button>
          </li>
          <li>
            <button data-sort="popularity.asc" onClick={handleClick}>
              Popularity Ascending
            </button>
          </li>
          <li>
            <button data-sort="vote_average.desc" onClick={handleClick}>
              Rating Descending
            </button>
          </li>
          <li>
            <button data-sort="vote_average.asc" onClick={handleClick}>
              Rating Ascending
            </button>
          </li>
          <li>
            <button
              data-sort={
                type === "tv"
                  ? "first_air_date.desc"
                  : "primary_release_date.desc"
              }
              onClick={handleClick}
            >
              Release Date Descending
            </button>
          </li>
          <li>
            <button
              data-sort={
                type === "tv"
                  ? "first_air_date.asc"
                  : "primary_release_date.asc"
              }
              onClick={handleClick}
            >
              Release Date Ascending
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default SortingFiltered;
