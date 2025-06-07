// src/pages/Contact.js
import React, { useState } from 'react';
import './Contact.css'; 

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert('Le formulaire n\'est pas fonctionnel car il nécessite une implémentation backend. Les données sont affichées dans la console.');
    console.log('Données du formulaire soumises :', formData);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4">Contactez-moi</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <form onSubmit={handleSubmit} className="p-4 shadow-sm rounded bg-white">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nom Complet</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Adresse Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre.email@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Sujet</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet de votre message"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label">Votre Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Écrivez votre message ici..."
                  required
                ></textarea>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg">Envoyer le message</button>
              </div>
            </form>
          </div>
        </div>

        <div className="row mt-5 text-center">
          <div className="col-md-4 mb-4">
            <i className="fas fa-map-marker-alt fa-3x mb-3 text-primary"></i>
            <h4>Adresse</h4>
            <p>123 Rue de l'Exemple</p>
            <p>75001 Paris, France</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="fas fa-envelope fa-3x mb-3 text-primary"></i>
            <h4>Email</h4>
            <p>john.doe@example.com</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="fas fa-phone-alt fa-3x mb-3 text-primary"></i>
            <h4>Téléphone</h4>
            <p>+33 1 23 45 67 89</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;