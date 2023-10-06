import React from 'react';

function Therapy({ therapy }) {
  return (
    <div>
      <h3>{therapy.name}</h3>
      {isURL(therapy.image) ? (
        <img src={therapy.image} alt={therapy.name} />
      ) : (
        <img src={`http://127.0.0.1:8000/storage/${therapy.image}`} alt={therapy.name} />
      )}
      <p>{therapy.description}</p>
    </div>
  );
}

function isURL(str) {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}

export default Therapy;