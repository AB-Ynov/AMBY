import React from 'react'

import { Helmet } from 'react-helmet'

import './paged-information.css'

const PagedINFORMATION = (props) => {
  return (
    <div className="paged-information-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="paged-information-paged-information">
        <span className="paged-information-text">
          <span>Se déconnecter</span>
        </span>
        <span className="paged-information-text02">
          <span>Amby - INFORMATION</span>
        </span>
        <span className="paged-information-text04">
          <span>Informer / éduquer les utilisateurs</span>
        </span>
        <span className="paged-information-text06">
          <span>
            <span>ACTUALITÉ, BUSINESS MONDIALE</span>
            <br></br>
            <span>Articles</span>
          </span>
        </span>
        <span className="paged-information-text11">
          <span>
            <span>ÉDUCATION FINANCIÈRE</span>
            <br></br>
            <span>Article</span>
            <br></br>
            <span>Coaching</span>
            <br></br>
            <span>Formations</span>
          </span>
        </span>
        <span className="paged-information-text20">
          <span>
            <span>ACCOMPAGNEMENT ADMINISTRATIF</span>
            <br></br>
            <span>Tips sur les démarches à faire</span>
            <br></br>
            <span>
              Sorte de parcours ludique et interactif  pour accompagner à
              entreprendre
            </span>
          </span>
        </span>
        <span className="paged-information-text27">
          <span>
            <span>STRUCTURE D&apos;ACCUEIL  ET ACCOMPAGNEMENT</span>
            <br></br>
            <span>
              Recensement des concours, incubateurs,  programmes
              d’accompagnement
            </span>
          </span>
        </span>
        <span className="paged-information-text32">
          <span>FORMATIONS</span>
        </span>
      </div>
    </div>
  )
}

export default PagedINFORMATION
