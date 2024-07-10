import React from 'react';

function DescriptionEvenement({ title, date, description }) {
  return (
    <div className="p-card p-mb-4">
      <div className="p-card-header">
        <h2>{title}</h2>
        <p>{date}</p>
      </div>
      <div className="p-card-body">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default DescriptionEvenement;
