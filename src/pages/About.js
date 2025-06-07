// src/pages/About.js
import React from 'react';
import './About.css';
import profileImage from '../assets/images/face.jpg';
import { Link } from 'react-router-dom'; 
import GitHubProfile from '../components/GitHubProfile'; 

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4">À Propos de Moi</h2>
        <div className="row align-items-center">
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={profileImage}
              className="img-fluid rounded-circle shadow-lg face-img"
              alt="Photo de profil de John Doe"
            />
          </div>
          <div className="col-lg-7">
            <h3>John DOE, Développeur Web</h3>
            <p className="lead">
              Actuellement en formation intensive de développeur web, je suis passionné par la création de solutions numériques innovantes et par l'apprentissage continu des dernières technologies. Mon objectif est de transformer des idées complexes en expériences utilisateur fluides et intuitives.
            </p>
            <p>
              Fort d'une curiosité insatiable et d'une approche méthodique, je me suis spécialisé dans le développement front-end avec React.js, tout en acquérant des bases solides en back-end et en gestion de bases de données. Je suis autonome, rigoureux et j'apprécie le travail en équipe pour atteindre des objectifs ambitieux.
            </p>
            <p>
              Prêt à relever de nouveaux défis, je suis à la recherche d'une opportunité qui me permettra de mettre mes compétences au service d'un projet stimulant et de continuer à évoluer dans un environnement dynamique.
            </p>
            <div className="row mt-4">
              <div className="col-md-6">
                <h5>Compétences Techniques</h5>
                <p>HTML/CSS</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '95%' }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >95%</div>
                </div>
                <p>JavaScript (ES6+)</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '85%' }}
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >85%</div>
                </div>
                <p>React.js</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '80%' }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >80%</div>
                </div>
              </div>
              <div className="col-md-6">
                <h5>Outils & Autres Compétences</h5>
                <p>Node.js & Express</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '70%' }}
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >70%</div>
                </div>
                <p>Bases de données (SQL/NoSQL)</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '60%' }}
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >60%</div>
                </div>
                <p>Git & GitHub</p>
                <div className="progress mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '90%' }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >90%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Intégration du composant GitHubProfile */}
        <div className="row mt-5 justify-content-center">
            <div className="col-md-8 col-lg-6">
                <h3 className="text-center mb-4 text-primary">Mon profil GitHub</h3>
                <GitHubProfile />
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;