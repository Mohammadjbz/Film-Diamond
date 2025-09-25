import { useSearchParams } from "react-router-dom";

function SortingFiltered({ setSort }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  console.log(type);

  function handleClick(e) {
    const value = e.target.dataset.sort;
    console.log(value);
    setSort(value);

    const map = {
      "popularity.desc": "popularity-desc",
      "popularity.asc": "popularity-asc",
      "vote_average.desc": "rating-desc",
      "vote_average.asc": "rating-asc",
      "first_air_date.desc": "release-date-desc",
      "primary_release_date.desc": "release-date-desc",
      "first_air_date.asc": "release-date-asc",
      "primary_release_date.asc": "release-date-asc",
    };

    searchParams.set("sort", map[value]);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <button>Sorting By</button>
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
              type === "tv" ? "first_air_date.asc" : "primary_release_date.asc"
            }
            onClick={handleClick}
          >
            Release Date Ascending
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SortingFiltered;
