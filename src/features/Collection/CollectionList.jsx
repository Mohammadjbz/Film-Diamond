import { Link } from "react-router-dom";

function CollectionList({ onItemClick }) {
  return (
    <div className=" absolute left-0 bg-[#1e1e1e] w-[250%] h-[240px] rounded-[8px] z-2">
      <ul className="text-white">
        <li
          onClick={onItemClick}
          className="mt-2 mb-1 pl-2  transition duration-500 ease-in-out hover:text-[#F5C51C]"
        >
          <Link to={`/filter?type=movie&genre=28&page=1&sort=popularity-desc`}>
            Action Movie
          </Link>
        </li>
        <li
          onClick={onItemClick}
          className="mb-1 pl-2  transition duration-500 ease-in-out hover:text-[#F5C51C]"
        >
          <Link to={`/filter?type=movie&genre=12&page=1&sort=popularity-desc`}>
            Adventure Movie
          </Link>
        </li>
        <li
          onClick={onItemClick}
          className="mb-1 pl-2  transition duration-500 ease-in-out hover:text-[#F5C51C]"
        >
          <Link to={`/filter?type=movie&genre=35&page=1&sort=popularity-desc`}>
            Comedy Movie
          </Link>
        </li>
        <li
          onClick={onItemClick}
          className="mb-1 pl-2 transition duration-500 ease-in-out hover:text-[#F5C51C]"
        >
          <Link
            to={`/filter?type=movie&genre=10751&page=1&sort=popularity-desc`}
          >
            Family Movie
          </Link>
        </li>
      </ul>

      <ul className="text-white">
        <li
          onClick={onItemClick}
          className="mb-1 pl-2  transition duration-500 ease-in-out hover:text-[#F5C51C]"
        >
          <Link to={`/filter?type=tv&genre=10759&page=1&sort=popularity-desc`}>
            Action Series
          </Link>
        </li>
        <li
          onClick={onItemClick}
          className="mb-1 pl-2  transition duration-500 ease-in-out hover:text-[#F5C51C]"
        >
          <Link to={`/filter?type=tv&genre=10767&page=1&sort=popularity-desc`}>
            Talk Show Series
          </Link>
        </li>
        <li
          onClick={onItemClick}
          className="mb-1 pl-2  transition duration-500 ease-in-out hover:text-[#F5C51C]"
        >
          <Link to={`/filter?type=tv&genre=35&page=1&sort=popularity-desc`}>
            Comedy Series
          </Link>
        </li>
        <li
          onClick={onItemClick}
          className="mb-1 pl-2 transition duration-500 ease-in-out hover:text-[#F5C51C]"
        >
          <Link to={`/filter?type=tv&genre=10751&page=1&sort=popularity-desc`}>
            Family Series
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CollectionList;
