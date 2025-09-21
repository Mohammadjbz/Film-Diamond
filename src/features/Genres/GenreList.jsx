import { Link } from "react-router-dom";

function GenreList() {
  return (
    <div className="flex gap-3">
      <ul className="text-white">
        <li>
          <Link to={`/filter?type=movie&genre=28`}>Action Movie</Link>
        </li>
        <li>
          <Link to={`/filter?type=movie&genre=12`}>Adventure Movie</Link>
        </li>
        <li>
          <Link to={`/filter?type=movie&genre=35`}>Comedy Movie</Link>
        </li>
        <li>
          <Link to={`/filter?type=movie&genre=10751`}>Family Movie</Link>
        </li>
      </ul>

      <ul className="text-white">
        <li>
          <Link to={`/filter?type=tv&genre=10759`}>Action Series</Link>
        </li>
        <li>
          <Link to={`/filter?type=tv&genre=10767`}>Talk Show Series</Link>
        </li>
        <li>
          <Link to={`/filter?type=tv&genre=35`}>Comedy Series</Link>
        </li>
        <li>
          <Link to={`/filter?type=tv&genre=10751`}>Family Series</Link>
        </li>
      </ul>
    </div>
  );
}

export default GenreList;
