function LanguageFilter({setLanguage}) {

  function handleClick(e) {
    const language = e.target.dataset.lang;
    setLanguage(language);
  }

  return (
    <div>
      <span>language</span>
      <ul>
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
  );
}

export default LanguageFilter;
