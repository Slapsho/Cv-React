// src/pages/Services.js
import React from 'react';
import './Services.css'; 

const Services = () => {
 
  const servicesList = [
    {
      id: 1,
      title: 'Développement Web Front-end',
      description: 'Création d\'interfaces utilisateur dynamiques et interactives avec React.js, HTML5 et CSS3, garantissant une expérience utilisateur fluide.',
      icon: 'fas fa-laptop-code', 
    },
    {
      id: 2,
      title: 'Développement Web Back-end',
      description: 'Conception et mise en œuvre de solutions côté serveur robustes et évolutives, gestion de bases de données et APIs sécurisées.',
      icon: 'fas fa-server',
    },
    {
      id: 3,
      title: 'Design Responsive & Intégration',
      description: 'Assurer que votre site s\'affiche parfaitement sur tous les appareils (ordinateurs, tablettes, mobiles) et intégrer des maquettes avec précision.',
      icon: 'fas fa-mobile-alt',
    },
    {
      id: 4,
      title: 'Maintenance & Optimisation',
      description: 'Assurer la performance, la sécurité et l\'évolution continue de vos applications web existantes pour une expérience utilisateur optimale.',
      icon: 'fas fa-cogs',
    },
    
  ];

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4">Mes Services</h2>
    
        <p className="lead text-center mb-5">
          Fort de mes compétences en développement web, je propose une gamme complète de services pour concrétiser vos projets numériques et optimiser votre présence en ligne.
        </p>

        <div className="row">
          {servicesList.map(service => (
            <div className="col-md-6 col-lg-4 mb-4" key={service.id}> 
              <div className="card h-100 shadow-sm service-card"> 
                <div className="card-body text-center d-flex flex-column align-items-center">
              
                  <i className={`${service.icon} fa-4x mb-4 text-primary`}></i>
                  <h5 className="card-title text-primary">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;