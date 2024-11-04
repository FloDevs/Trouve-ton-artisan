import { NavLink } from 'react-router-dom';
import '../style/Footer.scss'; 

function Footer() {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <ul className="list-inline">
              <li className="list-inline-item">
                <NavLink to="/404"  className="footer-link">Mentions légales</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/404"  className="footer-link">Données personnelles</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/404"  className="footer-link">Accessibilité</NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink to="/404"  className="footer-link">Cookies</NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-6 text-md-right">
            <p>101 cours Charlemagne CS 20033 69269 LYON CEDEX 02 France</p>
            <p>+33 (0)4 26 73 40 00</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
