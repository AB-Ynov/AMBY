import React from 'react';

const ListeEvenements: React.FC = () => {
    return (
        <div>
            <h1>Suivi des Événements</h1>
            <div>
                <h2>Prochains Événements</h2>
                {/* Liste des prochains événements */}
            </div>
            <div>
                <h2>Événements Passés</h2>
                {/* Liste des événements passés */}
            </div>
            <div>
                <h2>Wishlist</h2>
                {/* Liste des événements wishlistés */}
            </div>
        </div>
    );
}

export default ListeEvenements;
