import React, { useState } from 'react';
import './Accueil.css';

const Accueil = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="accueil-container">
      <h1 className="accueil-title">Bienvenue sur AMBY</h1>
      <p className="accueil-description">
        AMBY est une plateforme collaborative qui vous permet de partager vos expériences et vos connaissances sur les sujets qui vous passionnent.
      </p>
      <div className="accueil-buttons">
        <button className="accueil-button" onClick={() => setShowLogin(true)}>
          Connexion
        </button>
        <button className="accueil-button" onClick={() => setShowRegister(true)}>
          Inscription
        </button>
      </div>
      {showLogin && (
        <div className="login-modal">
          <div className="modal-content">
            <button onClick={() => setShowLogin(false)}>Fermer</button>
            {/* Contenu du formulaire de connexion */}
          </div>
        </div>
      )}
      {showRegister && (
        <div className="register-modal">
          <div className="modal-content">
            <button onClick={() => setShowRegister(false)}>Fermer</button>
            {/* Contenu du formulaire d'inscription */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Accueil;
