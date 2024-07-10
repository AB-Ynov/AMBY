import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

function ParametresProfil() {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>Paramètres du Profil</h2>
      <TabView>
        <TabPanel header="All Tasks">
          {/* Contenu pour All Tasks */}
        </TabPanel>
        <TabPanel header="Personal">
          {/* Contenu pour Personal */}
        </TabPanel>
        <TabPanel header="My Work">
          {/* Contenu pour My Work */}
        </TabPanel>
        <TabPanel header="Shopping">
          {/* Contenu pour Shopping */}
        </TabPanel>
        <TabPanel header="Projet X">
          {/* Contenu pour Projet X */}
        </TabPanel>
      </TabView>
    </div>
  );
}

export default ParametresProfil;
