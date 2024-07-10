import React, { useState } from 'react';
import './Connexion.css'; // Assurez-vous d'avoir un fichier CSS correspondant

function Connexion({ setShowRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Ici, vous pouvez implémenter la logique de connexion
    // Par exemple, envoi des données à une API pour l'authentification utilisateur
    console.log('Connexion soumise avec:', { email, password });
    // Pour l'exemple, nous réinitialisons simplement les champs après la soumission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="connexion-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p>Vous n'avez pas de compte? <span onClick={() => setShowRegister(true)}>Inscrivez-vous ici</span></p>
    </div>
  );
}

export default Connexion;
