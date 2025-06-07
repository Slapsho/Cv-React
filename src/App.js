// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Importation pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services'; 
import Realisations from './pages/Realisations'; 
import Blog from './pages/Blog'; 
import Contact from './pages/Contact'; 
import LegalMentions from './pages/LegalMentions'; 

import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} /> 
           <Route path="/mentions-legales" element={<LegalMentions />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;