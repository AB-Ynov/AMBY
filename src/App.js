import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Accueil from './components/Accueil';
// import CreationEvenement from './components/CreationEvenement';
// import DescriptionEvenement from './components/DescriptionEvenement';
// import Feed from './components/Feed';
// import MapEvenements from './components/MapEvenements';
// import MessagerieDirecte from './components/MessagerieDirecte';
// import ParametresProfil from './components/ParametresProfil';
import Profil from './components/Profil';
// import PublicationContenu from './components/PublicationContenu';
// import RechercheEvenement from './components/RechercheEvenement';
// import RechercheProfil from './components/RechercheProfil';
// import Recommandations from './components/Recommandations';
// import ReferencementEvenement from './components/ReferencementEvenement';
// import EventDetail from './components/EventDetail';
import NotFound from './components/NotFound';

// PrimeReact
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

function App() {
    const PrimeReactConfig = {
        ripple: true,
    };

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Accueil />,
            errorElement: <NotFound />,
        },
        {
            path: "/404",
            element: <NotFound />,
            errorElement: <NotFound />,
        },
        {
            path: "/event",
            children: [
                {
                    path: "/create",
                    element: <NotFound />,
                    errorElement: <NotFound />,
                },
                {
                    path: "/edit",
                    element: <NotFound />,
                    errorElement: <NotFound />,
                },
                {
                    path: "/search",
                    element: <NotFound />,
                    errorElement: <NotFound />,
                },
                {
                    path: "/delete/:id",
                    element: <NotFound />,
                    errorElement: <NotFound />,
                },
                {
                    path: "/map",
                    element: <NotFound />,
                    errorElement: <NotFound />,
                },
            ]
        },
        {
            path: "/profil",
            children: [
                {
                    path: "",
                    element: <Profil />,
                    errorElement: <NotFound />,
                },
                {
                    path: "/edit",
                    element: <NotFound />,
                    errorElement: <NotFound />,
                },
            ]
        },
        {
            path: "/404",
            element: <NotFound />,
            errorElement: <NotFound />,
        },
    ]);


    //       <Routes>
    //       <Route path="/creation-evenement" element={<CreationEvenement/>} />
    //       <Route path="/description-evenement" element={<DescriptionEvenement/>} />
    //       <Route path="/feed" element={<Feed/>} />
    //       <Route path="/map-evenements" element={<MapEvenements/>} />
    //       <Route path="/messagerie-directe" element={<MessagerieDirecte/>} />
    //       <Route path="/parametres-profil" element={<ParametresProfil/>} />
    //       <Route path="/profil" element={<Profil/>} />
    //       <Route path="/publication-contenu" element={<PublicationContenu/>} />
    //       <Route path="/recherche-evenement" element={<RechercheEvenement/>} />
    //       <Route path="/recherche-profil" element={<RechercheProfil/>} />
    //       <Route path="/recommandations" element={<Recommandations/>} />
    //       <Route path="/referencement-evenement" element={<ReferencementEvenement/>} />
    //       <Route path="/event-detail" element={<EventDetail/>} />
    //   </Routes>

    return (
        <PrimeReactProvider value={PrimeReactConfig}>
            <section className="w-full h-full flex flex-column align-items-center">
                <RouterProvider router={routes} />
            </section>
        </PrimeReactProvider>
    );
}

export default App;
