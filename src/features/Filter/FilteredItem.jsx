import { Link, useSearchParams } from "react-router-dom";
import { BASE_IMAGE_URL } from "../../utils/constants";

function FilteredItem({ data }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const type = searchParams.get("type");
  const finalType = type === "movie" ? type : "series";

  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-8 ">
      {data.map((item) => (
        <Link
          to={`/${finalType}/detail/${item.id}`}
          key={item.id}
          className="flex flex-col items-center"
        >
          <img
            src={
              item.poster_path
                ? `${BASE_IMAGE_URL}${item.poster_path}`
                : "https://placehold.co/268x403?text=No+Image&font=opensans"
            }
            className="w-[300px] rounded-[6px]"
          />
          <span className="mt-1 font-semibold">{item.title || item.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default FilteredItem;
