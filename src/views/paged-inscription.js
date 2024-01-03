import React from 'react'

import { Helmet } from 'react-helmet'

import './paged-inscription.css'

const PagedInscription = (props) => {
  return (
    <div className="paged-inscription-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="paged-inscription-paged-inscription">
        <span className="paged-inscription-text">
          <span>Amby - Inscription</span>
        </span>
        <span className="paged-inscription-text02">
          <span>
            Nom complet :  Adresse e-mail :  Nom d&apos;utilisateur :  Mot de
            passe : 
          </span>
        </span>
        <span className="paged-inscription-text04">
          <span>Amby - Inscription</span>
        </span>
        <span className="paged-inscription-text06">
          <span>Déjà inscrit ?  Se connecter ici</span>
        </span>
        <span className="paged-inscription-text08">
          <span>S&apos;inscrire</span>
        </span>
      </div>
    </div>
  )
}

export default PagedInscription
