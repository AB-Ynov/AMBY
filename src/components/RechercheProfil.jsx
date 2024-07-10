import React from 'react';
import { InputText } from 'primereact/inputtext';

function RechercheProfil() {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>Recherche de Profil</h2>
      <InputText placeholder="Rechercher un profil" />
      {/* Résultats de la recherche */}
    </div>
  );
}

export default RechercheProfil;
