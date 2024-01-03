import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import PagedePrsentation from './views/pagede-prsentation'
import PagedeConnexion from './views/pagede-connexion'
import PagedAccueil from './views/paged-accueil'
import PagedInscription from './views/paged-inscription'
import PagedeFDRER from './views/pagede-fdrer'
import PagedINFORMATION from './views/paged-information'
import PagedeRFRENCEMENT from './views/pagede-rfrencement'
import PagedeRSEAUXSOCIAUX from './views/pagede-rseauxsociaux'
import PagedACTUALITBUSINESSMONDIALE from './views/paged-actualitbusinessmondiale'
import PagedDUCATIONFINANCIRE from './views/paged-ducationfinancire'
import PagedeSTRUCTUREDACCUEILETACCOMPAGNEMENT from './views/pagede-structuredaccueiletaccompagnement'
import PagedeFORMATIONS from './views/pagede-formations'
import PagedACCOMPAGNEMENTADMINISTRATIF from './views/paged-accompagnementadministratif'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={PagedePrsentation} exact path="/" />
        <Route component={PagedeConnexion} exact path="/pagede-connexion" />
        <Route component={PagedAccueil} exact path="/paged-accueil" />
        <Route component={PagedInscription} exact path="/paged-inscription" />
        <Route component={PagedeFDRER} exact path="/pagede-fdrer" />
        <Route component={PagedINFORMATION} exact path="/paged-information" />
        <Route component={PagedeRFRENCEMENT} exact path="/pagede-rfrencement" />
        <Route
          component={PagedeRSEAUXSOCIAUX}
          exact
          path="/pagede-rseauxsociaux"
        />
        <Route
          component={PagedACTUALITBUSINESSMONDIALE}
          exact
          path="/paged-actualitbusinessmondiale"
        />
        <Route
          component={PagedDUCATIONFINANCIRE}
          exact
          path="/paged-ducationfinancire"
        />
        <Route
          component={PagedeSTRUCTUREDACCUEILETACCOMPAGNEMENT}
          exact
          path="/pagede-structuredaccueiletaccompagnement"
        />
        <Route component={PagedeFORMATIONS} exact path="/pagede-formations" />
        <Route
          component={PagedACCOMPAGNEMENTADMINISTRATIF}
          exact
          path="/paged-accompagnementadministratif"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
