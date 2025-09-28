import { BASE_IMAGE_URL } from "../../utils/constants";

function FilteredItem({ data }) {
const finalData = data;

  return (
    <div className="flex flex-wrap">
      {data.map((item) => (
        <div key={item.id}>
          <img
            src={`${BASE_IMAGE_URL}${item.poster_path}`}
            className="w-[300px]"
          />
          <span>{item.title || item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default FilteredItem;
