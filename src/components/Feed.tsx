import React from 'react';

const Feed: React.FC = () => {
    return (
        <div>
            <h1>Feed</h1>
            <div>
                {/* Afficher le feed de stories */}
                <div>
                    <h2>Story Spontané</h2>
                    {/* Contenu de story */}
                </div>
                <div>
                    <h2>Contenu Vidéo</h2>
                    {/* Contenu vidéo */}
                </div>
                <div>
                    <h2>Contenu Photo</h2>
                    {/* Contenu photo */}
                </div>
                <div>
                    <h2>Contenu Texte</h2>
                    {/* Contenu texte */}
                </div>
            </div>
        </div>
    );
}

export default Feed;
