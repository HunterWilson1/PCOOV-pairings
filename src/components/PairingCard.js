import React from 'react';

const PairingCard = ({ name, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border border-olive-light">
      <h3 className="text-xl font-semibold text-olive-dark mb-2">{name}</h3>
      <p className="text-olive-light">{description}</p>
    </div>
  );
};

export default PairingCard;
