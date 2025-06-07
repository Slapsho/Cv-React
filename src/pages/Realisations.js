import React from 'react';
import './Realisations.css';
import { Link } from 'react-router-dom';
import projectPortfolioImage from '../assets/images/projetperso.jpg'; 
import projectPhrasesImage from '../assets/images/projetphrases.jpg';
import projectGifImage from '../assets/images/bannière.gif'


const Realisations = () => {
 const projects = [
  {
   id: 1,
   title: 'Projet Présentation',
   description: 'Voici un petit site de présentation pour des personnages toujours en cours mais voici un début',
   image: projectPortfolioImage, 
   githubLink: 'https://github.com/Slapsho/Site-personnages-CTG', 
   demoLink: '#' 
  },
  {
   id: 2,
   title: 'Projet raccourci phrases', 
   description: 'Voici un petit projet personnel avec pour but de copier-coller rapidement des éléments en jeux',
   image: projectPhrasesImage, 
   githubLink: 'https://github.com/Slapsho/Site-phrases', 
   demoLink: '#' 
  },
  { 
  id: 3,
 title: 'Projet bannière perso', 
 description: 'Voici une petite bannière réalisé sur canva très simple',
 image: projectGifImage, 
 githubLink: '', 
 demoLink: '#'
 }
 ];

 return (
  <section id="realisations" className="py-5">
   <div className="container">
    <h2 className="text-center mb-5 display-4">Mes Réalisations</h2>
    <div className="row">
     {projects.map(project => (
      <div className="col-md-6 col-lg-4 mb-4" key={project.id}> 
       <div className="card h-100 shadow-sm">
       
        {project.image && (
         <img
          src={project.image} 
          className="card-img-top" 
          alt={`Capture d'écran du projet : ${project.title}`} 
          style={{ height: '200px', objectFit: 'cover' }} 
         />
        )}
        <div className="card-body d-flex flex-column"> 
         <h5 className="card-title">{project.title}</h5>
         <p className="card-text">{project.description}</p>
         <div className="d-flex justify-content-between align-items-center mt-auto pt-3">
        
          {project.githubLink && (
           <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm me-2">
            <i className="fab fa-github me-1"></i> Voir sur GitHub
           </a>
          )}
          {project.demoLink && (
           <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
            <i className="fas fa-external-link-alt me-1"></i> Démo
           </a>
          )}
         </div>
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default Realisations;