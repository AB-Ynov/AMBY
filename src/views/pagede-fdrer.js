import React from 'react'

import { Helmet } from 'react-helmet'

import './pagede-fdrer.css'

const PagedeFDRER = (props) => {
  return (
    <div className="pagede-fdrer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="pagede-fdrer-pagede-fdrer">
        <span className="pagede-fdrer-text">
          <span>Encourager au partage entre les utilisateurs</span>
        </span>
        <span className="pagede-fdrer-text02">
          <span>Se déconnecter</span>
        </span>
        <span className="pagede-fdrer-text04">
          <span>Amby - FÉDÉRER</span>
        </span>
        <span className="pagede-fdrer-text06">
          <span>
            <span>RÉFÉRENCEMENT </span>
            <br></br>
            <span>liste des événements</span>
            <br></br>
            <span>liste des conférences</span>
            <br></br>
            <span>liste des rencontres entrepreneuriat</span>
            <br></br>
            <span>liste des afterwork</span>
          </span>
        </span>
        <span className="pagede-fdrer-text17">
          <span>
            <span>RÉSEAUX SOCIAUX</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Messagerie</span>
            <br></br>
            <span>Post </span>
            <br></br>
            <span>Trouver un mentor</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default PagedeFDRER
