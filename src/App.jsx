import { useState, useEffect } from 'react';
import Arweave from 'arweave';
import './App.css';

function App() {
  const [wallet, setWallet] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState('');
  const [arweaveInstance, setArweaveInstance] = useState(null);

  // Initialize Arweave
  useEffect(() => {
    try {
      // Inisialisasi Arweave secara langsung
      const arweave = Arweave.init({
        host: 'arweave.net',
        port: 443,
        protocol: 'https'
      });
      
      setArweaveInstance(arweave);
      console.log("Arweave initialized successfully");
    } catch (error) {
      console.error('Error initializing Arweave:', error);
      setError('Failed to initialize Arweave library: ' + error.message);
    }
  }, []);

  const generateWallet = async () => {
    if (!arweaveInstance) {
      setError('Arweave library not initialized yet. Please wait or refresh the page.');
      return;
    }

    try {
      setIsGenerating(true);
      setError('');
      
      console.log("Generating new wallet...");
      
      // Generate a new wallet key
      const newWallet = await arweaveInstance.wallets.generate();
      
      // Get wallet address
      const address = await arweaveInstance.wallets.jwkToAddress(newWallet);
      
      console.log("Wallet generated successfully");
      
      setWallet(newWallet);
      setWalletAddress(address);
    } catch (error) {
      console.error('Error generating wallet:', error);
      setError('Failed to generate wallet: ' + error.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadWalletJSON = () => {
    if (!wallet) return;
    
    try {
      // Create a blob with the wallet data
      const walletData = JSON.stringify(wallet, null, 2);
      const blob = new Blob([walletData], { type: 'application/json' });
      
      // Create a download link
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `arweave-wallet-${walletAddress.substring(0, 8)}.json`;
      
      // Trigger download
      document.body.appendChild(a);
      a.click();
      
      // Clean up
      URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading wallet:', error);
      setError('Failed to download wallet JSON: ' + error.message);
    }
  };

  return (
    <div className="container">
      <h1>Arweave Wallet Generator</h1>
      
      {error && <div className="error-message">{error}</div>}
      
      <button 
        className="generate-btn" 
        onClick={generateWallet} 
        disabled={isGenerating || !arweaveInstance}
      >
        {isGenerating ? 'Generating...' : 'Generate New Wallet'}
      </button>
      
      {wallet && (
        <div className="wallet-info">
          <h2>Wallet Generated!</h2>
          <div className="address-container">
            <p><strong>Address:</strong></p>
            <p className="address">{walletAddress}</p>
          </div>
          
          <button 
            className="download-btn" 
            onClick={downloadWalletJSON}
          >
            Download Wallet JSON
          </button>
          
          <div className="warning">
            <p>⚠️ Important: Keep your wallet file safe and secure. Anyone with access to this file can control your funds.</p>
          </div>
        </div>
      )}
      
      <div className="copyright">
        &copy; {new Date().getFullYear()} Created by XBerry All Rights Reserved
        
        <div className="social-icons">
          <a 
            href="https://t.me/dlzvy" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon telegram-icon"
            title="Follow us on Telegram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
            </svg>
          </a>
          <a 
            href="https://x.com/XBerryAO" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-icon twitter-icon"
            title="Follow us on Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;