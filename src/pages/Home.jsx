import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; 
import '../style/Home.scss'; 

function Home() {
  const [artisans, setArtisans] = useState([]);
  const [activeStep, setActiveStep] = useState(null); 

  const handleSearch = (query) => {
    return query;
  };

  useEffect(() => {
    
    fetch('datas.json')
      .then(response => response.json())
      .then(data => {
        
        const topArtisans = data.filter(artisan => artisan.top).slice(0, 3);
        setArtisans(topArtisans);
      })
      .catch(error => console.error('Erreur lors du chargement des artisans:', error));
  }, []);

  
  const steps = [
    {
      title: 'Étape 1 :',
      description: 'Choisir la catégorie d’artisanat.',
      explanation: 'Dans le menu principal, vous trouverez différentes catégories d’artisanat. Sélectionnez celle qui correspond à vos besoins pour voir les artisans disponibles.',
    },
    {
      title: 'Étape 2 :',
      description: 'Choisir un artisan dans la liste.',
      explanation: 'Une fois la catégorie sélectionnée, parcourez la liste des artisans et choisissez celui qui vous convient le mieux en fonction de vos critères (localisation, spécialité, note, etc.).',
    },
    {
      title: 'Étape 3 :',
      description: 'Le contacter via le formulaire.',
      explanation: 'Sur la page de l’artisan choisi, vous trouverez un formulaire de contact. Remplissez-le avec vos informations et votre message pour entrer en relation avec l’artisan.',
    },
    {
      title: 'Étape 4 :',
      description: 'Temps de réponse.',
      explanation: 'Après avoir envoyé votre message, l’artisan vous répondra généralement sous 48 heures pour discuter de votre projet et vous fournir plus de détails.',
    },
  ];

  // Fonction pour basculer l'affichage de l'explication d'une étape
  const toggleStep = (index) => {
    setActiveStep((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="container">
        {/* Section "Comment trouver mon artisan ?" avec les étapes */}
        <section className="find-artisan">
          <h1 className="title-home find">Comment trouver mon artisan ?</h1>
          <ul className="steps-list">
            {steps.map((step, index) => (
              <li key={index} className="step-item">
                <div className="step-header" onClick={() => toggleStep(index)}>
                  <span className="step-title">
                    <strong>{step.title}</strong> {step.description}
                  </span>
                  <span className="step-toggle">
                    {activeStep === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </div>
                {activeStep === index && (
                  <div className="step-content">
                    <p>{step.explanation}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* Section "Artisans du mois" */}
        <section className="top-artisans mt-5">
          
          <div className="cards">
            {artisans.length > 0 ? (
              artisans.map((artisan) => (
                
                <div key={artisan.id} className="col-md-4">
                  <NavLink to={`/artisan-detail/${artisan.id}`} className="card-link" >
                  <div className="card-list card mb-3">
                    <div className="card-body">
                      <h2 className="card-title">{artisan.name}</h2>
                      <p className="card-text">Spécialité: {artisan.specialty}</p>
                      <p className="card-text">
                        Note: {Array.from({ length: artisan.note }, () => '⭐').join('')}
                      </p>
                      <p className="card-text">Localisation: {artisan.location}</p>
                      
                        
                     
                    </div>
                  </div>
                  </NavLink>
                </div>
                
              ))
            ) : (
              <p>Aucun artisan du mois disponible.</p>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
