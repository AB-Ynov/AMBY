import React from 'react';
import { Avatar } from 'primereact/avatar';

function Profil({ photo, nom, prenom, domaine }) {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <Avatar image={photo} shape="circle" size="xlarge" />
      <h3>{prenom} {nom}</h3>
      <p>{domaine}</p>
    </div>
  );
}

export default Profil;
