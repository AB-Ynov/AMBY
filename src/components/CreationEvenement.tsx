import React from 'react';

const CreationEvenement: React.FC = () => {
    return (
        <div>
            <h1>Création d'Événement</h1>
            {/* Formulaire pour créer un événement */}
            <form>
                <label>Nom de l'Événement:
                    <input type="text" name="nom" />
                </label>
                <label>Date de l'Événement:
                    <input type="date" name="date" />
                </label>
                <label>Description:
                    <textarea name="description" />
                </label>
                <button type="submit">Créer</button>
            </form>
        </div>
    );
}

export default CreationEvenement;
