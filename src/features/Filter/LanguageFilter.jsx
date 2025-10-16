import { useEffect, useRef, useState } from "react";

const styleFocus = "focus:text-[#F5C51C]"
const styleHover = "hover:text-[#fadb6b] transition-all duration-400 ease-in-out"

function LanguageFilter({ setLanguage }) {
  const [showLanguage, setShowLanguage] = useState(false);
  const menuRef = useRef(null);

  function handleClick(e) {
    const language = e.target.dataset.lang;
    setLanguage(language);
  }

  useEffect(() => {
    function handleOutsideClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowLanguage(false);
      }
    }
    if (showLanguage) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [showLanguage]);

  return (
    <div className="flex flex-col w-[40%]" ref={menuRef}>
      <button
        onClick={() => setShowLanguage((show) => !show)}
        className="border border-2 border-[#f5c61cab] text-[#faf1f1f9] rounded-[4px] py-[4px] px-[18px] w-fit mx-auto cursor-pointer hover:bg-[#44434197] transition-all ease-in-out diration-100"
      >
        language
      </button>
      {showLanguage && (
        <div className="flex justify-center gap-4 bg-[#242121e6] z-1  rounded-[8px]">
          <ul className="mt-1">
            <li className="mb-1">
              <button data-lang="en" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                English
              </button>
            </li>
            <li className="mb-1">
              <button data-lang="hi" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                "हिन्दी
              </button>
            </li>
            <li className="mb-1">
              <button data-lang="fr" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                Français
              </button>
            </li>
            <li className="mb-1">
              <button data-lang="es" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                Español
              </button>
            </li>
            <li className="mb-1">
              <button data-lang="fa" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                فارسی
              </button>
            </li>
          </ul>

          <ul className="mt-1">
            <li className="mb-1">
              <button data-lang="de" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                Deutsch
              </button>
            </li>
            <li className="mb-1">
              <button data-lang="it" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                Italiano
              </button>
            </li>
            <li className="mb-1">
              <button data-lang="ru" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                Pусский
              </button>
            </li>
            <li className="mb-1">
              <button data-lang="ja" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                日本語
              </button>
            </li>
            <li className="mb-1">
              <button data-lang="tr" onClick={handleClick} className={`${styleHover} ${styleFocus}`}>
                Türkçe
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageFilter;
