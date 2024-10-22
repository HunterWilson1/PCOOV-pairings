import React, { useState } from 'react';
import logo from './images/pcoovlogo.jpg';
import { pairingsData } from '../data/pairingData'; // Import pairing data
import PairingCard from './PairingCard'; // Import PairingCard component

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Meats'); // Track the active tab

  const renderContent = () => {
    const pairings = pairingsData[activeTab]; // Get pairings for the active tab

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pairings.map((pairing, index) => (
          <PairingCard key={index} name={pairing.name} description={pairing.description} />
        ))}
      </div>
    );
  };

  return (
    <div className="p-6 bg-background-light min-h-screen flex flex-col items-center">
      {/* Centered Image */}
      <img src={logo} alt="Pass Christian Olive Oils & Vinegars" className="w-40 h-auto mb-6" />

      <h1 className="text-4xl font-bold text-center mb-6 text-olive-dark">Olive Oil & Vinegar Pairings</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-4 border-b-2 border-accent-brown pb-2 w-full max-w-4xl">
        <Tab label="Meats" activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab label="Salads" activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab label="Vegetables" activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab label="Desserts" activeTab={activeTab} setActiveTab={setActiveTab} />
        <Tab label="Cocktails" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Tab Content */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-lg border border-olive-light w-full max-w-4xl">
        {renderContent()}
      </div>
    </div>
  );
};

// Tab Component
const Tab = ({ label, activeTab, setActiveTab }) => {
  return (
    <button
      className={`px-4 py-2 text-lg font-medium ${
        activeTab === label
          ? 'border-b-4 border-olive-dark text-olive-dark'
          : 'text-olive-light'
      }`}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );
};

export default HomePage;
