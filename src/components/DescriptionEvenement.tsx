import React from 'react';

const DescriptionEvenement: React.FC = () => {
    return (
        <div>
            <h1>Description de l'Événement</h1>
            {/* Détails de l'événement */}
            <div>
                <h2>Nom de l'Événement</h2>
                <p>Date: ...</p>
                <p>Description: ...</p>
                {/* Autres détails */}
            </div>
        </div>
    );
}

export default DescriptionEvenement;
