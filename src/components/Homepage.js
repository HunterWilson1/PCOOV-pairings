import React, { useState } from 'react';
import logo from './images/pcoovlogo.jpg';
import { pairingsData } from '../data/pairingData';
import PairingCard from './PairingCard';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('Meats'); // Track the active tab
  const [fade, setFade] = useState(false); // For smooth transitions

  // Function to handle smooth transition
  const handleTabChange = (newTab) => {
    setFade(true);
    setTimeout(() => {
      setActiveTab(newTab);
      setFade(false);
    }, 300); // Adjust the timeout for smoother transition
  };

  const renderContent = () => {
    const pairings = pairingsData[activeTab] || []; // Ensure there's always an array
  
    return (
      <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${fade ? 'opacity-0 transition-opacity duration-300' : 'opacity-100 transition-opacity duration-300'}`}>
        {pairings.map((pairing, index) => (
          pairing.name && pairing.description ? ( // Only render if both name and description are available
            <PairingCard key={index} name={pairing.name} description={pairing.description} />
          ) : null // Skip empty cards
        ))}
      </div>
    );
  };
  

  return (
    <div className="p-6 bg-background-light min-h-screen flex flex-col items-center justify-start">

      {/* Centered Image */}
      <img src={logo} alt="Pass Christian Olive Oils & Vinegars" className="w-32 sm:w-40 h-auto mb-6" />

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center space-x-4 border-b-2 border-accent-brown pb-2 w-full max-w-2xl">
        <Tab label="Meats" activeTab={activeTab} setActiveTab={handleTabChange} />
        <Tab label="Salads" activeTab={activeTab} setActiveTab={handleTabChange} />
        <Tab label="Vegetables" activeTab={activeTab} setActiveTab={handleTabChange} />
        <Tab label="Desserts" activeTab={activeTab} setActiveTab={handleTabChange} />
        <Tab label="Cocktails" activeTab={activeTab} setActiveTab={handleTabChange} />
      </div>

      {/* Tab Content */}
      <div className="mt-6 bg-white p-4 rounded-lg shadow-lg border border-olive-light w-full max-w-2xl">
        {renderContent()}
      </div>
    </div>
  );
};

// Tab Component
const Tab = ({ label, activeTab, setActiveTab }) => {
  return (
    <button
      className={`px-4 py-2 text-sm sm:text-lg font-medium transition-all ${
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
