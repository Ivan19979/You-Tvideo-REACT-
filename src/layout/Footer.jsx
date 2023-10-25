import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Link className="footer__link" to="/">
          <svg
            className="footer__link__logo"
            viewBox="0 0 360 48"
            role="img"
            aria-label="Logo service You-Tvideo"
          >
            <use href="/image/sprite.svg#logo-white" />
          </svg>
        </Link>

        <div className="footer__developers">
          <ul className="footer__developers-list">
            <li className="footer__developers-item">
              Designer:
              <a
                className="footer__developer-link"
                href="https://t.me/Mrshmallowww"
                target="_blank"
                rel="noreferrer"
              >
                Anastasia Ilina
              </a>
            </li>
            <li className="footer__developers-item">
              Developer:
              <a
                className="footer__developer-link"
                href="https://t.me/Shchurupoff"
                target="_blank"
                rel="noreferrer"
              >
                Ivan Shchurupov
              </a>
            </li>
          </ul>
          <p className="footer__developer-copyright">© You-Tvideo, 2023</p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
