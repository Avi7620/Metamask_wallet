import React, { useState } from 'react';
import Web3 from 'web3';

const MetaMaskConnect = () => {
  const [account, setAccount] = useState(null);
  const [error, setError] = useState('');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        setAccount(accounts[0]);
        setError('');
      } catch (err) {
        setError('Failed to connect wallet. Please try again.');
      }
    } else {
      setError('MetaMask is not installed. Please install MetaMask and try again.');
    }
  };

  return (
    <div className="wallet-container">
      <button onClick={connectWallet} className="connect-button">
        Connect Wallet
      </button>
      {account && <p>Connected account: {account}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default MetaMaskConnect;

