import { useSearchParams } from "react-router-dom";
import ReleaseRange from "./ReleaseRange";
import LanguageFilter from "./LanguageFilter";
import { useState } from "react";
import convertLanguage from "../../helpers/convertLanguage";

function FilterOption({
  language,
  setLanguage,
  rangeValue,
  setRangeValue,
  setFilter,
  type,
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showFilter, setShowFilter] = useState(false);
  const urlLanguage = searchParams.get("language") || "en";
  const urlYear = searchParams.get("release-range");
  const [minYear, maxYear] = urlYear?.split("-") || [1970, 2025];

  function handleFilter() {
    const [min, max] = rangeValue;
    setFilter(`${language}${rangeValue}`);
    searchParams.set("language", language);
    searchParams.set("release-range", `${min}-${max}`);
    setSearchParams(searchParams);
  }

  return (
    <div className="h-[190px] min-w-[45%]">
      <div className="flex gap-2">
        <button
          onClick={() => setShowFilter((show) => !show)}
          className="mb-3 p-2 w-[20%] flex justify-center items-center cursor-pointer rounded-[6px] font-semibold text-black bg-[#ffffff]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 8L5 8"
              stroke="black"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17 12L5 12"
              stroke="black"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 16L5 16"
              stroke="black"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span>Filter</span>
        </button>
        <button className="mb-3 p-2 w-[20%] rounded-[6px] bg-[#312e2e]">
          {convertLanguage(urlLanguage)}
        </button>
        <button className="mb-3 p-2 w-[20%] rounded-[6px] bg-[#312e2e]">
          {type}
        </button>
        <button className="mb-3 min-w-[150px] p-2 w-[20%] rounded-[6px] bg-[#312e2e]">
          {" "}
          from {minYear} to {maxYear}
        </button>
      </div>

      {showFilter && (
        <div className="flex items-start  h-40 mb-10">
          <ReleaseRange rangeValue={rangeValue} setRangeValue={setRangeValue} />
          <LanguageFilter setLanguage={setLanguage} />
          <button
            className="py-[4px] px-[8px] border rounded-[4px] cursor-pointer bg-[#F5C51C] text-black font-semibold"
            onClick={handleFilter}
          >
            Filter
          </button>
        </div>
      )}
    </div>
  );
}

export default FilterOption;
