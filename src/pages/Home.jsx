import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';

import '../style/Home.scss'; // Vous pouvez styliser cette page avec Sass si besoin

function Home() {
  const [artisans, setArtisans] = useState([]);
  const handleSearch = (query) => {
    console.log(`Recherche depuis HomePage pour : ${query}`);
    // Logique spécifique à HomePage pour gérer la recherche
  };

  useEffect(() => {
    // Chargez les artisans depuis le JSON, en supposant qu'il soit dans `public/artisans.json`
    fetch('datas.json')
      .then(response => response.json())
      .then(data => {
        // Sélectionne les trois artisans ayant le champ "top" défini à true
        const topArtisans = data.filter(artisan => artisan.top).slice(0, 3);
        setArtisans(topArtisans);
      })
      .catch(error => console.error('Erreur lors du chargement des artisans:', error));
  }, []);

  return (
    <>
     <Header onSearch={handleSearch}/>
    <div className="container">
      
      <section className="find-artisan">
        <h2>Comment trouver mon artisan ?</h2>
        <ol>
          <li>
            <strong>Étape 1 :</strong> Choisir la catégorie d’artisanat dans le menu.
          </li>
          <li>
            <strong>Étape 2 :</strong> Choisir un artisan dans la liste.
          </li>
          <li>
            <strong>Étape 3 :</strong> Le contacter via le formulaire de contact.
          </li>
          <li>
            <strong>Étape 4 :</strong> Une réponse sera apportée sous 48h.
          </li>
        </ol>
      </section>

      
      <section className="top-artisans mt-5">
        <h2>Artisans du mois</h2>
        <div className="row">
          {artisans.length > 0 ? (
            artisans.map((artisan) => (
              <div key={artisan.id} className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{artisan.name}</h5>
                    <p className="card-text">Spécialité: {artisan.specialty}</p>
                    <p className="card-text">
                      Note: {Array.from({ length: artisan.note }, () => '⭐').join('')}
                    </p>
                    <p className="card-text">Localisation: {artisan.location}</p>
                    <NavLink to={`/artisan-detail/${artisan.id}`} className="btn btn-primary">
                        Voir plus
                      </NavLink>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Aucun artisan du mois disponible.</p>
          )}
        </div>
      </section>
    </div>
    <Footer/>
    </>
  );
}

export default Home;
