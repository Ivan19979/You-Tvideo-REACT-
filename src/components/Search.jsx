import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = ({ setSearch = Function.prototype, value = "" }) => {
  const navigate = useNavigate();
  const search = useRef(value);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(search.current);
    navigate(`/search/${search.current}`);
  };

  const handleChange = (event) => {
    search.current = event.target.value;
    if (event.key === "Enter") {
      setSearch(search.current);
      navigate(`/search/${search.current}`);
    }
  };

  return (
    <section className="search">
      <div className="container">
        <form className="search__form" onSubmit={handleSearch}>
          <input
            name="search"
            type="search"
            className="search__input"
            placeholder="Найти видео..."
            onChange={handleChange}
            required
          />
          <button className="search__btn" type="submit">
            <span>поиск</span>
            <svg className="search__icon">
              <use href="/image/sprite.svg#search"></use>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export { Search };
