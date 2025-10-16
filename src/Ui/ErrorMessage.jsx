import { Link } from "react-router-dom";

function ErrorMessage({ text, redirect }) {
  return (
    <div className="w-[32.5rem] h-[23rem] mx-auto flex flex-col justify-center items-center">
      <span className="text-[#e99426] font-bold text-xl mt-4">{text}</span>

      {redirect && (
        <Link to="/">
          <button className="text-white border-2 p-2 cursor-pointer rounded-[5px] mt-10 transition-all ease-in-out duration-400 hover:text-[#e9c526] hover:bg-[#44434161]">
            Go to Home
          </button>
        </Link>
      )}
    </div>
  );
}

export default ErrorMessage;


