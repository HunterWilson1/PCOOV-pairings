import React from 'react';

const PairingCard = ({ name, description }) => {
    if (!name || !description) return null; // Prevent rendering empty cards
  
    return (
      <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold text-olive-dark mb-2">{name}</h3>
        <p className="text-olive-light">{description}</p>
      </div>
    );
  };
  
export default PairingCard;
