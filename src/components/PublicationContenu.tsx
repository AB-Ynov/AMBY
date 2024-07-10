import React from 'react';

const PublicationContenu: React.FC = () => {
    return (
        <div>
            <h1>Publication de Contenu</h1>
            {/* Formulaire pour publier du contenu */}
            <form>
                <label>Type de Contenu:
                    <select name="type">
                        <option value="texte">Texte</option>
                        <option value="photo">Photo</option>
                        <option value="video">Vidéo</option>
                    </select>
                </label>
                <label>Contenu:
                    <textarea name="contenu" />
                </label>
                <button type="submit">Publier</button>
            </form>
        </div>
    );
}

export default PublicationContenu;
