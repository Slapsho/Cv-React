// src/components/GitHubProfile.js
import React, { useState, useEffect } from 'react';
import './GitHubProfile.css'; 

const GitHubProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const fetchGitHubProfile = async () => {
    try {
      const response = await fetch('https://api.github.com/users/github-john-doe');
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      const data = await response.json();
      setProfileData(data);
    } catch (err) {
      console.error("Erreur lors de la récupération du profil GitHub:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGitHubProfile(); 
  }, []); 
  if (loading) {
    return <div className="text-center py-5"><i className="fas fa-spinner fa-spin fa-2x text-primary"></i> <p className="mt-3">Chargement du profil GitHub...</p></div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">Erreur : {error}. Impossible de charger le profil GitHub.</div>;
  }

  if (!profileData) {
    return <div className="text-center py-5">Aucune donnée de profil GitHub trouvée.</div>;
  }

  return (
    <div className="github-profile-card card shadow-sm p-4 text-center">
      <img
        src={profileData.avatar_url}
        alt={`${profileData.name || profileData.login} - GitHub Avatar`}
        className="rounded-circle mb-3 github-avatar"
      />
      <h4 className="text-primary">{profileData.name || profileData.login}</h4>
      {profileData.bio && <p className="text-muted">{profileData.bio}</p>}
      <div className="d-flex justify-content-around my-3">
        <div>
          <strong className="d-block">{profileData.followers}</strong>
          <small>Followers</small>
        </div>
        <div>
          <strong className="d-block">{profileData.following}</strong>
          <small>Following</small>
        </div>
        <div>
          <strong className="d-block">{profileData.public_repos}</strong>
          <small>Repos Publics</small>
        </div>
      </div>
      <a
        href={profileData.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline-primary btn-sm mt-3"
      >
        Voir le profil GitHub <i className="fas fa-external-link-alt ms-2"></i>
      </a>
    </div>
  );
};

export default GitHubProfile;