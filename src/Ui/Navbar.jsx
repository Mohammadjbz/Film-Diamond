import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between mt-[20px]  w-4/5">
      <div className="flex items-center">
        <span className="bg-[#F5C51C] font-bold py-[3px] px-[12px] rounded-[0.25rem]">
          NEW
        </span>
        <span className=" text-[#F5C51C] py-[3px] px-[8px]">MOVIE</span>
      </div>

      <div className="flex items-center text-white">
        <ul className="flex gap-[3.25rem] items-center">
          <li>
            <Link to="/">New Movie</Link>
          </li>
          <li>
            <Link to="/">Genre</Link>
          </li>
          <li>
            <Link to="/">Country</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
          <li>
            <Link to="/series">TV Series</Link>
          </li>
        </ul>
        <span className="ml-[3.25rem] mr-[1.2rem]">|</span>
        <div className="flex gap-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="15"
            width="15"
            viewBox="0 0 640 640"
            className="mt-[6px]"
          >
            <path
              fill="#fcfcfc"
              d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z"
            />
          </svg>
          <span>Search</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
