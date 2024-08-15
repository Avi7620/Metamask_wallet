import React from 'react';
import './App.css';

import MetaMaskConnect from './MetaMaskConnect';

const App = () => {
  // Assuming Bitcoin price fetching logic from previous steps

  return (
    <center>
    <div className="App">
      <h1>Metamsk Connection</h1>
      {/* Crypto price cards */}
      <MetaMaskConnect />
    </div></center>
  );
};

export default App;
