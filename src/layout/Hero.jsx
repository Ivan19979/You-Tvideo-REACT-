import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__container">
          <Link to="/favorite" className="hero__link">
            <span>Избранное</span>
            <svg className="hero__icon">
              <use href="/image/sprite.svg#star-ow"></use>
            </svg>
          </Link>
          <svg
            className="hero__logo"
            viewBox="0 0 360 48"
            role="img"
            aria-label="Logo service You-Tvideo"
          >
            <use href="/image/sprite.svg#logo-white" />
          </svg>

          <h1 className="hero__title">Смотри. Загружай. Создавай</h1>
          <p className="hero__tagline">Удобный видеохостинг для тебя</p>
        </div>
      </div>
    </section>
  );
};

export { Hero };
