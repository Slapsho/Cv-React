import React, { useState, useRef, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [audioError, setAudioError] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const toggleMusic = () => {
    if (audioRef.current && !audioError) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error('Erreur de lecture audio:', error);
            setAudioError(true);
          });
      }
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  const handleAudioError = (e) => {
    console.error('Erreur audio:', e);
    setAudioError(true);
    setIsPlaying(false);
  };

  const handleAudioLoaded = () => {
    setAudioError(false);
    console.log('Audio chargé avec succès');
  };

  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: `url(/images/background.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        position: 'relative'
      }}
    >
      <div className="overlay"></div>
      
      
      {!audioError && (
        <div className="hero-audio">
          <button onClick={toggleMusic} title={isPlaying ? 'Pause' : 'Play'}>
            {isPlaying ? '⏸️' : '🎵'}
          </button>
          <span>Chill</span>
          <div className="volume-control">
            <span>🔊</span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              title="Volume"
            />
          </div>
        </div>
      )}

     
      {audioError && (
        <div className="hero-audio" style={{background: 'rgba(255, 0, 0, 0.1)'}}>
          <span style={{fontSize: '0.8rem'}}>🚫 Audio non disponible</span>
        </div>
      )}

     
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onError={handleAudioError}
        onCanPlay={handleAudioLoaded}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
      
        <source src="/assets/music/chill.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'audio HTML5.
      </audio>

      <div className="container position-relative z-2">
        <h1 className="display-4" data-text="Bienvenue sur mon CV en ligne">
          Bienvenue sur mon CV en ligne
        </h1>
        <h2 className="lead">Je suis John Doe, développeur web</h2>
        <Link to="/about" className="btn btn-primary mt-4">
          En savoir plus
        </Link>
      </div>
    </section>
  );
};

export default Home;