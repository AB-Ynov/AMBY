import React from 'react';

const ReferencementEvenement: React.FC = () => {
    return (
        <div>
            <h1>Référencement d'Événement</h1>
            {/* Formulaire pour référencer un événement */}
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
                <button type="submit">Soumettre</button>
            </form>
        </div>
    );
}

export default ReferencementEvenement;
