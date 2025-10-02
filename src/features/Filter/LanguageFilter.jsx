import { useState } from "react";

function LanguageFilter({ setLanguage }) {
  const [showLanguage, setShowLanguage] = useState(false);

  function handleClick(e) {
    const language = e.target.dataset.lang;
    setLanguage(language);
  }

  return (
    <div className="flex flex-col w-[40%]">
      <button
        onClick={() => setShowLanguage((show) => !show)}
        className="border border-[#999494] rounded-[4px] py-[4px] px-[18px] w-fit mx-auto cursor-pointer"
      >
        language
      </button>
      {showLanguage && (
        <div className="flex justify-center gap-4 mx-auto bg-[#242121e6] z-1 p-2 rounded-[8px]">
          <ul className="mt-1">
            <li>
              <button data-lang="en" onClick={handleClick}>
                english
              </button>
            </li>
            <li>
              <button data-lang="hi" onClick={handleClick}>
                india
              </button>
            </li>
            <li>
              <button data-lang="fr" onClick={handleClick}>
                french
              </button>
            </li>
            <li>
              <button data-lang="es" onClick={handleClick}>
                spanish
              </button>
            </li>
            <li>
              <button data-lang="fa" onClick={handleClick}>
                persian
              </button>
            </li>
          </ul>

          <ul className="mt-1">
            <li>
              <button data-lang="en" onClick={handleClick}>
                english
              </button>
            </li>
            <li>
              <button data-lang="hi" onClick={handleClick}>
                india
              </button>
            </li>
            <li>
              <button data-lang="fr" onClick={handleClick}>
                french
              </button>
            </li>
            <li>
              <button data-lang="es" onClick={handleClick}>
                spanish
              </button>
            </li>
            <li>
              <button data-lang="fa" onClick={handleClick}>
                persian
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageFilter;



