
// src/pages/Blog.js
import React from 'react';
import './Blog.css'; 
import { Link } from 'react-router-dom'; 

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: '15 des meilleurs exemples de blog pour vous inspirer',
      excerpt: 'Créer un blog peut vous permettre d’avoir un espace pour faire parler votre créativité.Créer un blog peut vous permettre d’avoir un espace pour faire parler votre créativité. En effet, si l’on voulait répondre à la question « qu’est-ce qu’un blog ? » ',
      date: '21.03.2024',
    },
    {
      id: 2,
      title: 'Qu’est-ce qu’un site internet ?',
      excerpt: 'Quelles sont les différences entre un blog et un site ? Comment choisir entre les deux ?',
      date: '04.04.2025',
    },
    {
      id: 3,
      title: 'Comment débuter la programmation de jeux vidéo ?',
      excerpt: 'Si l’idée de concevoir quelque chose d’innovant vous stimule, si vous avez une passion profonde pour la technologie et que les jeux vidéo vous captivent, alors vous êtes au bon endroit.Que vous envisagiez de faire de la création de jeux votre métier ou que vous souhaitiez simplement explorer la création d un jeu vidéo par plaisir, cet article vous fournira les informations nécessaires pour démarrer votre parcour.',
      date: '21.11.2024',
    },
    {
      id: 4,
      title: 'Comment le jeu vidéo a-t-il évolué depuis 30 ans ?',
      excerpt: 'Les choses ont grandement changé et l’évolution technologique est incontestablement passée par là. Cela n’a pas empêché le jeu vidéo de devenir une référence, bien au contraire ! Vous le savez très probablement, le monde vidéoludique est, dans l’univers du divertissement numérique, un véritable moteur.',
      date: '31.10.2024',
    },
    {
      id: 5,
      title: 'Comment le Web a évolué de sa conception à aujourd’hui',
      excerpt: 'L’origine d’internet remonte à la fin des années 50 où le concept même a été brossé par des scientifiques. Plusieurs phases se sont succédées pour aboutir au World Wide Web tel que nous le connaissons aujourd’hui. C’est le DoD (department of defense américain) qui dans les années 60 a mis sur pied le premier réseau connecté appelé ARPANET.',
      date: '22.12.2022',
    },
    {
      id: 6,
      title: 'Évolution de l’ordinateur - Son histoire jusqu’à aujourd’hui',
      excerpt: 'L’histoire des ordinateurs a commencé avec des conceptions primitives au début du 19e siècle et a continué à changer le monde au cours du 20e siècle.',
      date: '15/01/2025',
    },
  ];

  return (
    <section id="blog" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4">Mon Blog</h2>
        
        <p className="lead text-center mb-5">
          Découvrez mes réflexions, tutoriels et partages d'expériences sur le développement web, les technologies émergentes et la vie de développeur.
        </p>

        <div className="row">
          {articles.map(article => (
            <div className="col-md-6 col-lg-4 mb-4" key={article.id}>
              <div className="card h-100 shadow-sm blog-card"> 
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary">{article.title}</h5> 
                  <p className="card-text text-muted small">{article.date}</p>
                  <p className="card-text flex-grow-1">{article.excerpt}</p> 
                  <div className="mt-auto pt-3"> 
                 
                    <Link to="#" className="btn btn-outline-primary btn-sm">Lire la suite</Link> 
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

export default Blog;