import React from 'react';
import DescriptionEvenement from './DescriptionEvenement';

function Feed({ events }) {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>Fil d'Actualité</h2>
      {events.map(event => (
        <DescriptionEvenement key={event.id} {...event} />
      ))}
    </div>
  );
}

export default Feed;
