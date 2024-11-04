import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../style/SearchBar.scss';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const sanitizeInput = (input) => {
    const trimmedInput = input.trim().slice(0, 50);
    const safeInput = trimmedInput.replace(/[<>#{};$*|`^]/g, '');

    if (/script|<|>|\$|{|}/i.test(safeInput)) {
      setError('Requête invalide, veuillez réessayer.');
      return '';
    }
    setError('');
    return safeInput;
  };

  const handleChange = (e) => {
    const sanitizedInput = sanitizeInput(e.target.value);
    setQuery(sanitizedInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    if (typeof onSearch === 'function') {
      onSearch(query);
    }
    
    // Redirige vers la page ArtisanList avec le terme de recherche
    navigate(`/artisan-list?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Rechercher un artisan..."
          value={query}
          onChange={handleChange}
          aria-label="Search"
          maxLength="50"
        />
        <button type="submit" className="btn btn-primary">Rechercher</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchBar;
