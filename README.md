# Arweave Wallet Generator

A simple, secure tool for generating Arweave wallets offline. Create and manage Arweave wallets without exposing your private keys to the internet.

## Features

- **Offline Wallet Generation**: Create new Arweave wallets without an internet connection
- **Security-First Design**: All cryptographic operations happen locally in your browser
- **Export Options**: Save your wallet as JSON keyfile or paper backup
- **Address Verification**: Verify your wallet address before using it
- **Mnemonic Support**: Generate and restore wallets using mnemonic phrases
- **Open Source**: Transparent code that anyone can audit

## Installation

### Option 1: Use the hosted version

Visit [https://arweavewallet.github.io](https://arweavewallet.github.io) to use the tool without installation.

### Option 2: Run locally

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

### Import an existing wallet

1. Open the application
2. Click on "Import Wallet"
3. Select your JWK file or enter your mnemonic phrase
4. Verify the wallet address is correct

## Security Recommendations

- **Offline Usage**: For maximum security, use this tool on an air-gapped computer
- **Secure Backups**: Store your wallet backup in multiple secure locations
- **Verify Addresses**: Always double-check addresses before making transactions
- **Private Keys**: Never share your private keys or mnemonic phrases with anyone

## Technical Details

This tool uses the [Arweave JS SDK](https://github.com/ArweaveTeam/arweave-js) for cryptographic operations and wallet management. The wallet generation process follows the Arweave protocol specifications for creating RSA key pairs.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

This software is provided "as is", without warranty of any kind. Use at your own risk. The developers are not responsible for any loss of funds or other damages that may occur from using this tool.

## Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

---

Made with ❤️ for the Arweave community