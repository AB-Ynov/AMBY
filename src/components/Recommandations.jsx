import React from 'react';

function Recommandations({ recommendations }) {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>Recommandations</h2>
      {recommendations.map((rec, index) => (
        <div key={index} className="p-card p-mb-4">
          <div className="p-card-body">
            <p>{rec}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Recommandations;
