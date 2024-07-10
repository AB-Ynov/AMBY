import React, { useState } from 'react';
import { Button } from 'primereact/button';

function Accueil() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="p-d-flex p-flex-column p-ai-center accueil-container">
      <h1>Bienvenue sur AMBY</h1>
      <p>AMBY est une plateforme collaborative pour les jeunes entrepreneurs.</p>
      <div className="p-d-flex p-jc-center p-mt-4">
        <Button label="Connexion" icon="pi pi-sign-in" className="p-button-primary p-mr-2" onClick={() => setShowLogin(true)} />
        <Button label="Inscription" icon="pi pi-user-plus" className="p-button-success" onClick={() => setShowRegister(true)} />
      </div>
      {showLogin && (
        <div className="login-modal">
          <div className="modal-content">
            <Button icon="pi pi-times" onClick={() => setShowLogin(false)} />
            {/* Contenu du formulaire de connexion */}
          </div>
        </div>
      )}
      {showRegister && (
        <div className="register-modal">
          <div className="modal-content">
            <Button icon="pi pi-times" onClick={() => setShowRegister(false)} />
            {/* Contenu du formulaire d'inscription */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Accueil;
