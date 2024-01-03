import React from 'react'

import { Helmet } from 'react-helmet'

import './pagede-prsentation.css'

const PagedePrsentation = (props) => {
  return (
    <div className="pagede-prsentation-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="pagede-prsentation-pagede-prsentation">
        <span className="pagede-prsentation-text">
          <span>Amby - Présentation</span>
        </span>
        <span className="pagede-prsentation-text2">
          <span>Bienvenue sur Amby</span>
        </span>
        <span className="pagede-prsentation-text4">
          <span>S&apos;inscrire</span>
        </span>
        <span className="pagede-prsentation-text6">
          <span>Se connecter</span>
        </span>
        <img
          src="/external/pprslogo1923-v3ot-200w.png"
          alt="PPRSLOGO1923"
          className="pagede-prsentation-pprslogo1"
        />
      </div>
    </div>
  )
}

export default PagedePrsentation
