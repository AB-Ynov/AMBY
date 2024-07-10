import React from 'react';

const MessagerieDirecte: React.FC = () => {
    return (
        <div>
            <h1>Messagerie Directe</h1>
            {/* Interface de messagerie */}
            <div>
                {/* Liste des conversations */}
                <div>
                    {/* Messages */}
                </div>
                <form>
                    <input type="text" placeholder="Écrire un message..." />
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default MessagerieDirecte;
