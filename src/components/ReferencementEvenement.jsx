import React from 'react';

function ReferencementEvenement({ image, description }) {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <img src={image} alt="Event" style={{ maxWidth: '100%' }} />
      <p>{description}</p>
    </div>
  );
}

export default ReferencementEvenement;
