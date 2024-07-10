import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Accueil from './components/Accueil';
import CreationEvenement from './components/CreationEvenement';
import DescriptionEvenement from './components/DescriptionEvenement';
import Feed from './components/Feed';
import MapEvenements from './components/MapEvenements';
import MessagerieDirecte from './components/MessagerieDirecte';
import ParametresProfil from './components/ParametresProfil';
import Profil from './components/Profil';
import PublicationContenu from './components/PublicationContenu';
import RechercheEvenement from './components/RechercheEvenement';
import RechercheProfil from './components/RechercheProfil';
import Recommandations from './components/Recommandations';
import ReferencementEvenement from './components/ReferencementEvenement';
import EventDetail from './components/EventDetail';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Accueil} />
                <Route path="/creation-evenement" component={CreationEvenement} />
                <Route path="/description-evenement" component={DescriptionEvenement} />
                <Route path="/feed" component={Feed} />
                <Route path="/map-evenements" component={MapEvenements} />
                <Route path="/messagerie-directe" component={MessagerieDirecte} />
                <Route path="/parametres-profil" component={ParametresProfil} />
                <Route path="/profil" component={Profil} />
                <Route path="/publication-contenu" component={PublicationContenu} />
                <Route path="/recherche-evenement" component={RechercheEvenement} />
                <Route path="/recherche-profil" component={RechercheProfil} />
                <Route path="/recommandations" component={Recommandations} />
                <Route path="/referencement-evenement" component={ReferencementEvenement} />
                <Route path="/event-detail" component={EventDetail} />
            </Switch>
        </Router>
    );
}

export default App;
