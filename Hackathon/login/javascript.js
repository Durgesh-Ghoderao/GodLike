// Global variable to store the user's wallet address
let userAccount = "";

// Function to check if the wallet is already connected
async function checkWalletConnection() {
    if (window.ethereum) { // Check if MetaMask is installed
        try {
            // Request the connected accounts (if any)
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            // If accounts exist, the wallet is connected
            if (accounts.length > 0) {
                userAccount = accounts[0]; // Store the user's account address in the global variable
                console.log('Wallet already connected:', userAccount);
                
                // Show an already connected message
                const connectButton = document.getElementById('connectWalletButton');
                connectButton.textContent = 'Account Connected';
                connectButton.disabled = true; // Disable the button after connecting

                // Optionally, display the wallet address on the page
                const userAccountDisplay = document.getElementById('userAccountDisplay');
                if (userAccountDisplay) {
                    userAccountDisplay.textContent = `Connected Account: ${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`;
                }
                alert('Your wallet is already connected!');
            } else {
                console.log('No wallet connected');
            }
        } catch (error) {
            console.error('Error checking wallet connection:', error);
        }
    } else {
        console.log('MetaMask is not installed.');
        alert('Please install MetaMask to connect your wallet.');
    }
}

// Function to handle wallet connection
async function connectWallet() {
    if (window.ethereum) { // Check if MetaMask is installed
        try {
            // Request account access
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });

            // Get the user's account
            userAccount = accounts[0]; // Store the user's account address in the global variable

            // Print the user's wallet address to the console
            console.log('Connected wallet address:', userAccount);

            // Display success message in the console
            console.log('Wallet connected successfully!');

            // Change the button text
            const connectButton = document.getElementById('connectWalletButton');
            connectButton.textContent = 'Account Connected Successfully';
            connectButton.disabled = true; // Disable button after connecting

            // Optionally, display the wallet address on the page
            const userAccountDisplay = document.getElementById('userAccountDisplay');
            if (userAccountDisplay) {
                userAccountDisplay.textContent = `Connected Account: ${userAccount.slice(0, 6)}...${userAccount.slice(-4)}`;
            }

            // Show a success alert
            alert('Account Connected Successfully');
        } catch (error) {
            // Handle errors (e.g., user rejects the connection request)
            console.error('Error connecting wallet:', error);
            alert('Failed to connect wallet. Please try again.');
        }
    } else {
        // MetaMask is not installed 
        console.log('MetaMask is not installed. Redirecting to Chrome Web Store...');
        
        // Redirect the user to the MetaMask Chrome extension page
        const installMetaMask = confirm('You need MetaMask to connect your wallet. Would you like to install it now?');
        if (installMetaMask) {
            window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn', '_blank');
        }
    }
}

// Function to disconnect the wallet (reset the UI and clear the account)
function disconnectWallet() {
    const confirmDisconnect = confirm('Do you want to disconnect your MetaMask account and remove it from this site?');

    if (confirmDisconnect) {
        // Reset the button text to "Connect Wallet"
        const connectButton = document.getElementById('connectWalletButton');
        connectButton.textContent = 'Connect Wallet';
        connectButton.disabled = false; // Re-enable the button

        // Hide the account display (optional)
        const userAccountDisplay = document.getElementById('userAccountDisplay');
        if (userAccountDisplay) {
            userAccountDisplay.textContent = '';
        }

        // Reset the global variable
        userAccount = '';

        // Show a disconnect alert
        alert('MetaMask account has been disconnected.');
    }
}

// Add event listener to the "Connect Wallet" button
document.getElementById('connectWalletButton').addEventListener('click', connectWallet);

// Add event listener to the "Disconnect Wallet" button
document.getElementById('disconnectWalletButton').addEventListener('click', disconnectWallet);

// Check if the wallet is already connected when the page loads
window.onload = checkWalletConnection;

// Mobile menu toggle
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});