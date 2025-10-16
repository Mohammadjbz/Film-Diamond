import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const buttonStyle = "hover:text-[#F5C51C] transition-all ease-in-out duration-200 cursor-pointer";

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
    <div className="min-w-[25%] relative pl-4">
      <button
        onClick={() => setShowSortList((prev) => !prev)}
        className="flex items-center cursor-pointer gap-1 p-2 rounded-[6px] bg-[#312e2e] transition-all ease-in-out duration-100 hover:bg-[#3b3939]"
      >
        <span>Sorting By</span>

        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 640"
            className="w-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path
                fill="#f0f4f7"
                d="M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"
              />
            </svg>
          </svg>
        </span>
      </button>
      {showSortList && (
        <ul className="bg-[#242121e6] rounded-[8px] absolute p-3 text-left">
          <li className="mb-1">
            <button
              data-sort="popularity.desc"
              onClick={handleClick}
              className={buttonStyle}
            >
              Popularity Descending
            </button>
          </li>
          <li className="mb-1">
            <button
              data-sort="popularity.asc"
              onClick={handleClick}
              className={buttonStyle}
            >
              Popularity Ascending
            </button>
          </li>
          <li className="mb-1">
            <button
              data-sort="vote_average.desc"
              onClick={handleClick}
              className={buttonStyle}
            >
              Rating Descending
            </button>
          </li>
          <li className="mb-1">
            <button
              data-sort="vote_average.asc"
              onClick={handleClick}
              className={buttonStyle}
            >
              Rating Ascending
            </button>
          </li>
          <li className="mb-1">
            <button
              data-sort={
                type === "tv"
                  ? "first_air_date.desc"
                  : "primary_release_date.desc"
              }
              onClick={handleClick}
              className={buttonStyle}
            >
              Release Date Descending
            </button>
          </li>
          <li className="mb-1">
            <button
              data-sort={
                type === "tv"
                  ? "first_air_date.asc"
                  : "primary_release_date.asc"
              }
              onClick={handleClick}
              className={buttonStyle}
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
