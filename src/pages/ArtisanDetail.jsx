import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../style/ArtisanDetail.scss"

function ArtisanDetail() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSearch = (query) => {
    return query;
  };

  useEffect(() => {
    fetch('/datas.json')
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

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, subject, message, email: artisan.email }),
      });

      
      setName('');
      setSubject('');
      setMessage('');

      if (response.ok) {
        alert('Votre message a été envoyé avec succès.');
      } else {
        alert('Erreur lors de l’envoi du message.');
      }
    } catch (error) {
      console.error('Erreur:', error);

      
      setName('');
      setSubject('');
      setMessage('');

      alert('Erreur lors de l’envoi du message.');
    }
  };

  if (error) return <p>Erreur : {error}</p>;
  if (!artisan) return <p>Chargement des détails de l&apos;artisan...</p>;

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="container">
      <div className="card card-details mb-3">
      <div className="card-body">
        <h1 className="card-title title-home">{artisan.name}</h1>
        <p className="card-text">
          {artisan.specialty}
        </p>
        <p className="card-text">
          {Array.from({ length: artisan.note }, () => '⭐').join('')}
        </p>
        <p className="card-text">
          {artisan.location}
        </p>
        <p className="card-text">
          {artisan.about}
        </p>
        <p className="card-text">
          Email: <a href={`mailto:${artisan.email}`}>{artisan.email}</a>
        </p>
        {artisan.website && (
          <p className="card-text">
            Site web:{' '}
            <a href={artisan.website} target="_blank" rel="noopener noreferrer">
              {artisan.website}
            </a>
          </p>
        )}
      </div>
    </div>

        {/* Formulaire de contact */}
        <div className="contact-form">
          <h2>Contacter l&apos;artisan</h2>
          <form className='form' onSubmit={handleSubmit}>
            <div className='input-mail'>
              
              <input placeholder='Votre nom' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className='input-mail'>
              
              <input placeholder='Objet' type="text" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            </div>
            <div className='input-mail'>
              
              <textarea placeholder='Votre message' value={message} onChange={(e) => setMessage(e.target.value)} required />
            </div>
            <button type="submit">Envoyer</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ArtisanDetail;
