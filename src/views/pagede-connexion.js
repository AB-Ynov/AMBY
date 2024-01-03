import React from 'react'

import { Helmet } from 'react-helmet'

import './pagede-connexion.css'

const PagedeConnexion = (props) => {
  return (
    <div className="pagede-connexion-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="pagede-connexion-pagede-connexion">
        <span className="pagede-connexion-text">
          <span>Amby - Connexion</span>
        </span>
        <span className="pagede-connexion-text2">
          <span>Nom d&apos;utilisateur :  Mot de passe : </span>
        </span>
        <span className="pagede-connexion-text4">
          <span>Se connecter</span>
        </span>
        <span className="pagede-connexion-text6">
          <span>Pas encore inscrit ? S&apos;inscrire ici</span>
        </span>
      </div>
    </div>
  )
}

export default PagedeConnexion
