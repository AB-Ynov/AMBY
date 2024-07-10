import React, { useState } from 'react';
import './Inscription.css'; // Assurez-vous d'avoir un fichier CSS correspondant

function Inscription({ setShowLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Ici, vous pouvez implémenter la logique de validation et d'envoi des données
    // Par exemple, envoi des données à une API pour l'enregistrement utilisateur
    console.log('Inscription soumise avec:', { email, password });
    // Pour l'exemple, nous réinitialisons simplement les champs après la soumission
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="inscription-container">
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
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
        <div className="form-group">
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">S'inscrire</button>
      </form>
      <p>Vous avez déjà un compte? <span onClick={() => setShowLogin(true)}>Connectez-vous ici</span></p>
    </div>
  );
}

export default Inscription;
