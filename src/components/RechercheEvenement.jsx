import React from 'react';
import { InputText } from 'primereact/inputtext';

function RechercheEvenement() {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>Recherche d'Événement</h2>
      <InputText placeholder="Rechercher un événement" />
      {/* Résultats de la recherche */}
    </div>
  );
}

export default RechercheEvenement;
