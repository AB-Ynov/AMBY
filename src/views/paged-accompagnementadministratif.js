import React from 'react'

import { Helmet } from 'react-helmet'

import './paged-accompagnementadministratif.css'

const PagedACCOMPAGNEMENTADMINISTRATIF = (props) => {
  return (
    <div className="paged-accompagnementadministratif-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="paged-accompagnementadministratif-paged-accompagnementadministratif">
        <span className="paged-accompagnementadministratif-text">
          <span>Se déconnecter</span>
        </span>
        <span className="paged-accompagnementadministratif-text2">
          <span>Amby - ACCOMPAGNEMENT ADMINISTRATIF</span>
        </span>
        <span className="paged-accompagnementadministratif-text4">
          <span>Tips sur les démarches à faire</span>
        </span>
        <span className="paged-accompagnementadministratif-text6">
          <span>
            Sorte de parcours ludique et interactif  pour accompagner à
            entreprendre
          </span>
        </span>
      </div>
    </div>
  )
}

export default PagedACCOMPAGNEMENTADMINISTRATIF
