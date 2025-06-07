import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css'; 

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
        
          <Link to="/" className="navbar-brand text-uppercase">John DOE</Link> 

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link text-uppercase active" aria-current="page">Accueil</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link text-uppercase">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/realisations" className="nav-link text-uppercase">Réalisations</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link text-uppercase">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link text-uppercase">Contact</Link>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;