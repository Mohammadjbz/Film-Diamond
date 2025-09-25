import { Link } from "react-router-dom";

function CollectionList() {
  return (
    <div className="flex gap-3">
      <ul className="text-white">
        <li>
          <Link to={`/filter?type=movie&genre=28&page=1&sort=popularity-desc`}>
            Action Movie
          </Link>
        </li>
        <li>
          <Link to={`/filter?type=movie&genre=12&page=1&sort=popularity-desc`}>
            Adventure Movie
          </Link>
        </li>
        <li>
          <Link to={`/filter?type=movie&genre=35&page=1&sort=popularity-desc`}>
            Comedy Movie
          </Link>
        </li>
        <li>
          <Link
            to={`/filter?type=movie&genre=10751&page=1&sort=popularity-desc`}
          >
            Family Movie
          </Link>
        </li>
      </ul>

      <ul className="text-white">
        <li>
          <Link to={`/filter?type=tv&genre=10759&page=1&sort=popularity-desc`}>
            Action Series
          </Link>
        </li>
        <li>
          <Link to={`/filter?type=tv&genre=10767&page=1&sort=popularity-desc`}>
            Talk Show Series
          </Link>
        </li>
        <li>
          <Link to={`/filter?type=tv&genre=35&page=1&sort=popularity-desc`}>
            Comedy Series
          </Link>
        </li>
        <li>
          <Link to={`/filter?type=tv&genre=10751&page=1&sort=popularity-desc`}>
            Family Series
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default CollectionList;
