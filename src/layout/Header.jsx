import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link className="header__link" to="/">
          <svg
            className="header__logo"
            viewBox="0 0 240 32"
            role="img"
            aria-label="Logo service You-Tvideo"
          >
            <use href="/image/sprite.svg#logo-orange" />
          </svg>
        </Link>

        <Link to="/favorite" className="header__link header__link_favorite">
          <span>Избранное</span>
          <svg className="header__icon">
            <use href="/image/sprite.svg#star-ob"></use>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export { Header };
