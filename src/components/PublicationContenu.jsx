import React from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

function PublicationContenu() {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>Publication de Contenu</h2>
      <TabView>
        <TabPanel header="All">
          {/* Contenu pour All */}
        </TabPanel>
        <TabPanel header="Open">
          {/* Contenu pour Open */}
        </TabPanel>
        <TabPanel header="Closed">
          {/* Contenu pour Closed */}
        </TabPanel>
        <TabPanel header="Archived">
          {/* Contenu pour Archived */}
        </TabPanel>
      </TabView>
    </div>
  );
}

export default PublicationContenu;
