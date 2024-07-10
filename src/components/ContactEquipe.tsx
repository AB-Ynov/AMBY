import React from 'react';

const ContactEquipe: React.FC = () => {
    return (
        <div>
            <h1>Contact de l'Équipe</h1>
            {/* Formulaire de contact */}
            <form>
                <label>Nom:
                    <input type="text" name="nom" />
                </label>
                <label>Email:
                    <input type="email" name="email" />
                </label>
                <label>Message:
                    <textarea name="message" />
                </label>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default ContactEquipe;
