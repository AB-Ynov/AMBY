import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';

function CreationEvenement() {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>Créer un Événement</h2>
      <div className="p-field p-mt-4">
        <label htmlFor="title">Titre</label>
        <InputText id="title" placeholder="Titre de l'événement" />
      </div>
      <div className="p-field p-mt-4">
        <label htmlFor="date">Date</label>
        <Calendar id="date" placeholder="Sélectionner une date" />
      </div>
      <div className="p-field p-mt-4">
        <label htmlFor="description">Description</label>
        <InputTextarea id="description" rows={5} placeholder="Description de l'événement" />
      </div>
      <Button label="Créer" icon="pi pi-check" className="p-button-success p-mt-4" />
    </div>
  );
}

export default CreationEvenement;
