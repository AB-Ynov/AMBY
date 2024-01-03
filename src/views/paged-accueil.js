import React from 'react'

import { Helmet } from 'react-helmet'

import './paged-accueil.css'

const PagedAccueil = (props) => {
  return (
    <div className="paged-accueil-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="paged-accueil-paged-accueil">
        <span className="paged-accueil-text">
          <span>Bienvenue sur Amby</span>
        </span>
        <span className="paged-accueil-text02">
          <span>Se déconnecter</span>
        </span>
        <span className="paged-accueil-text04">
          <span>Amby - Accueil</span>
        </span>
        <span className="paged-accueil-text06">
          <span>FÉDÉRER</span>
        </span>
        <span className="paged-accueil-text08">
          <span>INFORMATION</span>
        </span>
      </div>
    </div>
  )
}

export default PagedAccueil
