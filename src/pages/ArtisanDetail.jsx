import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (query) => {
    console.log(`Recherche depuis HomePage pour : ${query}`);
    // Logique spécifique à HomePage pour gérer la recherche
  };

  useEffect(() => {
    fetch('/datas.json') // Assurez-vous que 'datas.json' est dans le dossier 'public'
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const foundArtisan = data.find(artisan => artisan.id === parseInt(id, 10));
        if (!foundArtisan) {
          throw new Error('Artisan non trouvé');
        }
        setArtisan(foundArtisan);
      })
      .catch(error => {
        console.error('Erreur lors du chargement de l\'artisan:', error);
        setError(error.message);
      });
  }, [id]);

  if (error) return <p>Erreur : {error}</p>;
  if (!artisan) return <p>Chargement des détails de l&apos;artisan...</p>;

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="container">
        <h2>{artisan.name}</h2>
        <p><strong>Spécialité:</strong> {artisan.specialty}</p>
        <p><strong>Note:</strong> {Array.from({ length: artisan.note }, () => '⭐').join('')}</p>
        <p><strong>Localisation:</strong> {artisan.location}</p>
        <p><strong>À propos:</strong> {artisan.about}</p>
        <p><strong>Email:</strong> <a href={`mailto:${artisan.email}`}>{artisan.email}</a></p>
        {artisan.website && (
          <p><strong>Site web:</strong> <a href={artisan.website} target="_blank" rel="noopener noreferrer">{artisan.website}</a></p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default ArtisanDetail;
