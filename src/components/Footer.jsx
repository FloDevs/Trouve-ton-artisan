import { NavLink } from "react-router-dom";
import "../style/Footer.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Footer() {
  const handleClick = async (e) => {
    e.preventDefault();

    await new Promise((resolve) => setTimeout(resolve, 300));

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <nav className="navbar navbar-expand-lg navbar-footer">
        <div className="container container-footer">
          <address className="address">
            101 cours Charlemagne
            <br />
            CS 20033
            <br />
            69269 LYON CEDEX 02
            <br />
            France
            <br />
            +33 (0)4 26 73 40 00
          </address>

          <button
            className="navbar-toggler navbar-toggler-footer"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#footerNav"
            aria-controls="footerNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="div-footer collapse navbar-collapse" id="footerNav">
            <ul className="navbar-nav navbar-footer ms-auto">
              <li className="nav-item nav-footer">
                <NavLink to="/404" className="nav-link">
                  Mentions légales
                </NavLink>
              </li>
              <li className="nav-item nav-footer">
                <NavLink to="/404" className="nav-link">
                  Données personnelles
                </NavLink>
              </li>
              <li className="nav-item nav-footer">
                <NavLink to="/404" className="nav-link">
                  Accessibilité
                </NavLink>
              </li>
              <li className="nav-item nav-footer">
                <NavLink to="/404" className="nav-link">
                  Cookies
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
