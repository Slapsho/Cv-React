// src/pages/LegalMentions.js
import React from 'react';
import './LegalMentions.css'; 

const LegalMentions = () => {
  return (
    <section id="legal-mentions" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 display-4">Mentions Légales</h2>
        <div className="card p-4 shadow-sm rounded"> 
          <h4 className="mb-3">Informations générales</h4>
          <p>
            Ce site est édité par : <strong>John DOE</strong>
            <br />
            Adresse : 123 Rue de l'Exemple, 75001 Paris, France
            <br />
            Email : <a href="mailto:contact@johndoe.com">contact@johndoe.com</a>
            <br />
            Téléphone : +33 1 23 45 67 89
            <br />
            Statut : Développeur Web indépendant
            <br />
            Numéro SIRET (si applicable) : XXXXXXXXXXXXXX
          </p>

          <h4 className="mt-5 mb-3">Hébergement</h4>
          <p>
            Nom de l'hébergeur : [Nom de votre hébergeur, ex: Netlify, Vercel, OVH, Hostinger]
            <br />
            Adresse de l'hébergeur : [Adresse complète de l'hébergeur]
            <br />
            Site web de l'hébergeur : <a href="[Lien vers le site de l'hébergeur]" target="_blank" rel="noopener noreferrer">[Nom de votre hébergeur]</a>
          </p>

          <h4 className="mt-5 mb-3">Propriété intellectuelle</h4>
          <p>
            L'ensemble de ce site (contenu et présentation) constitue une œuvre protégée par la législation française et internationale en vigueur sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
          </p>
          <p>
            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
          </p>

          <h4 className="mt-5 mb-3">Protection des données personnelles</h4>
          <p>
            Les informations recueillies via les formulaires de contact de ce site sont enregistrées dans un fichier informatisé par John DOE pour la gestion des demandes de contact. Elles sont conservées pendant une durée de [Préciser une durée, ex: 1 an] et sont destinées uniquement à John DOE.
          </p>
          <p>
            Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données vous concernant. Pour exercer ces droits, veuillez nous contacter à l'adresse email : <a href="mailto:contact@johndoe.com">contact@johndoe.com</a>.
          </p>
          <p>
            Ce site n'utilise pas de cookies persistants pour collecter des données personnelles.
          </p>

          <h4 className="mt-5 mb-3">Limitation de responsabilité</h4>
          <p>
            John DOE s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site, dont il se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, John DOE ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à la disposition sur ce site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalMentions;