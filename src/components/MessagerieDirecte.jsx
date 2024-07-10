import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

function MessagerieDirecte() {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>Messagerie Directe</h2>
      <div className="p-field p-mt-4" style={{ width: '100%' }}>
        <InputText placeholder="Type your message" style={{ width: 'calc(100% - 50px)' }} />
        <Button icon="pi pi-send" className="p-button-primary" />
      </div>
      <div className="p-d-flex p-flex-column p-mt-4" style={{ width: '100%', maxHeight: '300px', overflowY: 'auto' }}>
        {/* Messages will be displayed here */}
      </div>
    </div>
  );
}

export default MessagerieDirecte;
