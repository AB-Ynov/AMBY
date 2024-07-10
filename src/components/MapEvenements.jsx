import React from 'react';

function MapEvenements() {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>Carte des Événements</h2>
      <div id="map" style={{ width: '100%', height: '400px', backgroundColor: 'grey' }}>
        {/* Intégration de la carte interactive ici */}
      </div>
    </div>
  );
}

export default MapEvenements;
