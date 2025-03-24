# Arweave Wallet Generator

A simple, secure tool for generating Arweave wallets offline. Create and manage Arweave wallets without exposing your private keys to the internet.

## Features

- **Security-First Design**: All cryptographic operations happen locally in your browser
- **Export Options**: Save your wallet as JSON keyfile or paper backup
- **Address Verification**: Verify your wallet address before using it
- **Open Source**: Transparent code that anyone can audit

## Installation

### Run locally

```bash
# Clone the repository
git clone https://github.com/dlzvy/arweavewalletgenerator.git

# Navigate to the project directory
cd arweavewalletgenerator

# Install dependencies
yarn

# Start the development server
yarn start
```

## Usage

### Generate a new wallet

1. Open the application
2. Click on "Generate New Wallet"
3. Move your mouse around to add entropy (randomness)
4. Save your wallet keyfile and backup your JWK securely

## Security Recommendations

- **Secure Backups**: Store your wallet backup in multiple secure locations
- **Verify Addresses**: Always double-check addresses before making transactions
- **Private Keys**: Never share your private keys or mnemonic phrases with anyone

## Technical Details

This tool uses the [Arweave JS SDK](https://github.com/ArweaveTeam/arweave-js) for cryptographic operations and wallet management. The wallet generation process follows the Arweave protocol specifications for creating RSA key pairs.


Made with ❤️ for the Arweave community