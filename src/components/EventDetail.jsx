import React from 'react';

function EventDetail({ event }) {
  return (
    <div className="p-d-flex p-flex-column p-ai-center p-p-4">
      <h2>{event.title}</h2>
      <p>{event.date}</p>
      <p>{event.description}</p>
    </div>
  );
}

export default EventDetail;
