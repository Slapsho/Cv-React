// src/components/Footer.js
import React, { useState, useEffect } from 'react'; // <-- Importez useState et useEffect
import { Link } from 'react-router-dom';
import './Footer.css';



function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };


  const dummyProjects = [
    { id: 1, title: 'Projet Présentation', link: '/realisations#projet1' },
    { id: 2, title: 'Projet phrases', link: '/realisations#projet2' },
    { id: 3, title: 'Projet bannière', link: '/realisations#projet3' },
  ];
  const dummyArticles = [
    { id: 1, title: 'Pourquoi React ?', link: '/blog#article1' },
    { id: 2, title: 'Conseils pour le SEO', link: '/blog#article2' },
    { id: 3, title: 'Découverte CSS Grid', link: '/blog#article3' },
  ];

  const latestProjects = dummyProjects.slice(0, 3);
  const latestArticles = dummyArticles.slice(0, 3);


  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">
         
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">John DOE</h5>
            <p>
              <i className="fas fa-home me-3"></i> 123 Rue de l'Exemple, 75001 Paris
            </p>
            <p>
              <i className="fas fa-envelope me-3"></i> john.doe@example.com
            </p>
            <p>
              <i className="fas fa-phone me-3"></i> +33 1 23 45 67 89
            </p>
            <div className="social-links mt-3">
              <a href="https://github.com/votre-utilisateur-github" target="_blank" rel="noopener noreferrer nofollow" className="btn btn-outline-light btn-social mx-1">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/votre-utilisateur-twitter" target="_blank" rel="noopener noreferrer nofollow" className="btn btn-outline-light btn-social mx-1">
                <i className="fab fa-twitter"></i> 
              </a>
              <a href="https://linkedin.com/in/votre-utilisateur-linkedin" target="_blank" rel="noopener noreferrer nofollow" className="btn btn-outline-light btn-social mx-1">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

        
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Liens Utiles</h5>
            <p><Link to="/" className="text-white" style={{ textDecoration: 'none' }}>Accueil</Link></p>
            <p><Link to="/about" className="text-white" style={{ textDecoration: 'none' }}>À propos</Link></p>
            <p><Link to="/services" className="text-white" style={{ textDecoration: 'none' }}>Services</Link></p>
            <p><Link to="/contact" className="text-white" style={{ textDecoration: 'none' }}>Contact</Link></p>
            <p><Link to="/mentions-legales" className="text-white" style={{ textDecoration: 'none' }}>Mentions Légales</Link></p>
          </div>

        
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"> 
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Dernières Réalisations</h5>
            {latestProjects.map(project => (
              <p key={project.id}><Link to={project.link} className="text-white" style={{ textDecoration: 'none' }}>{project.title}</Link></p>
            ))}
          </div>

          
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3"> 
            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Derniers Articles</h5>
            {latestArticles.map(article => (
              <p key={article.id}><Link to={article.link} className="text-white" style={{ textDecoration: 'none' }}>{article.title}</Link></p>
            ))}
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-start mb-0">
                Copyright &copy;{new Date().getFullYear()} Tous droits réservés par :&nbsp;
                <a href="/" style={{ textDecoration: 'none' }}>
                  <strong className="text-primary">John DOE</strong>
                </a>
              </p>
            </div>
            <div className="col-md-5 col-lg-4 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
               
            </div>
          </div>
      </div>
   
      <a
        href="#top"
        className={`back-to-top d-flex align-items-center justify-content-center ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </footer>
  );
}

export default Footer;