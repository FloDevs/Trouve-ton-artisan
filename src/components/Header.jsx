import { NavLink } from 'react-router-dom';
import '../style/Header.scss';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';

function Header({ onSearch }) {
  console.log('onSearch dans Header:', onSearch); // Vérifiez si onSearch est bien transmis

  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand ms-5" to="/">
          <img src="Logo.png" alt="Logo avec écrit : Trouve ton artisan ! Avec la région Auvergne Rhône-Alpes" />
        </NavLink>
        <SearchBar onSearch={onSearch} /> {/* Transmet onSearch à SearchBar */}
        <button
          className="navbar-toggler me-5"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNav">
        <ul className="navbar-nav ms-auto ms-5">
            <li className="nav-item">
              <NavLink to="/artisan-list?category=Bâtiment" className="nav-link">Bâtiment</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/artisan-list?category=Services" className="nav-link">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/artisan-list?category=Fabrication" className="nav-link">Fabrication</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/artisan-list?category=Alimentation" className="nav-link">Alimentation</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  onSearch: PropTypes.func,
};

export default Header;
