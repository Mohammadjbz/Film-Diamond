import { useSearchParams } from "react-router-dom";
import ReleaseRange from "./ReleaseRange";
import LanguageFilter from "./LanguageFilter";

function FilterOption({
  language,
  setLanguage,
  rangeValue,
  setRangeValue,
  setFilter,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleFilter() {
    const [min, max] = rangeValue;
    setFilter(`${language}${rangeValue}`);
    searchParams.set("language", language);
    searchParams.set("release-range", `${min}-${max}`);
    setSearchParams(searchParams);
  }

  return (
    <div className="mt-5 ml-3">
      <span>Filter:</span>

      <div className="flex gap-20 items-center">
        <ReleaseRange rangeValue={rangeValue} setRangeValue={setRangeValue} />
        <LanguageFilter setLanguage={setLanguage} />
        <button className="bg-red-800 mt-5" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
}

export default FilterOption;
