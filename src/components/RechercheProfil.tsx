import React from 'react';

const RechercheProfil: React.FC = () => {
    return (
        <div>
            <h1>Recherche de Profil</h1>
            <form>
                <label>Recherche:
                    <input type="text" name="recherche" />
                </label>
                <label>Filtrer par centre d’intérêt:
                    <select name="interet">
                        {/* Options de filtre */}
                    </select>
                </label>
                <label>Filtrer par projets:
                    <select name="projets">
                        {/* Options de filtre */}
                    </select>
                </label>
                <button type="submit">Chercher</button>
            </form>
            {/* Affichage des résultats de recherche */}
            <div>
                {/* Profils trouvés */}
            </div>
        </div>
    );
}

export default RechercheProfil;
