import { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../style/ArtisanList.scss";

function ArtisanList() {
  const [artisans, setArtisans] = useState([]);
  const [filteredArtisans, setFilteredArtisans] = useState([]);
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const location = useLocation();

  useEffect(() => {
    fetch("/datas.json")
      .then((response) => response.json())
      .then((data) => {
        setArtisans(data);
        setLoading(false); // Indique que les données sont chargées
      })
      .catch((error) => {
        console.error("Erreur lors du chargement des artisans:", error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    const filtered = artisans.filter(
      (artisan) =>
        artisan.name.toLowerCase().includes(query.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(query.toLowerCase()) ||
        artisan.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredArtisans(filtered);
  };

  const filterByCategory = (category) => {
    if (category) {
      setFilteredArtisans(
        artisans.filter((artisan) => artisan.category === category)
      );
    } else {
      setFilteredArtisans(artisans);
    }
  };

  useEffect(() => {
    // Récupère la catégorie et la recherche de l'URL
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get("search");
    const category = searchParams.get("category");

    if (searchQuery) {
      handleSearch(searchQuery);
    } else if (category) {
      filterByCategory(category);
    } else {
      setFilteredArtisans(artisans); // Affiche la liste complète si aucun filtre
    }
  }, [location.search, artisans]);

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="container">
        <h1 className="title-home title-list">Liste des artisans</h1>
        {loading ? (
          <p>Chargement des artisans...</p>
        ) : (
          <div className="cards">
            {filteredArtisans.length > 0 ? (
              filteredArtisans.map((artisan) => (
                <div key={artisan.id} className="col-md-4">
                  <NavLink
                    to={`/artisan-detail/${artisan.id}`}
                    className="card-link"
                  >
                    <div className="card mb-3 card-list">
                      <div className="card-body">
                        <h5 className="card-title">{artisan.name}</h5>
                        <p className="card-text">{artisan.specialty}</p>
                        <p className="card-text">
                          {Array.from(
                            { length: artisan.note },
                            () => "⭐"
                          ).join("")}
                        </p>
                        <p className="card-text">{artisan.location}</p>
                      </div>
                    </div>
                  </NavLink>
                </div>
              ))
            ) : (
              <p>Aucun artisan ne correspond à cette catégorie ou recherche.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ArtisanList;
