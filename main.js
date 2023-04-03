// Import the getNetworks function from the networks.js file
import { getNetworks } from './networks.js';
import { submitInput } from './connect.js';

// Get the array of network names from your JavaScript file
const networks = getNetworks();

// Get the container for the list
const networkContainer = document.getElementById('networks_list');
// Get the container element for the refresh button
const refreshContainer = document.getElementById('refresh_container');

// Create the refresh button
const refreshButton = document.createElement('button');
refreshButton.textContent = 'Refresh';

// Loop through the array of network names and create a button for each one
  networks.forEach(network => {
    const networkList = document.createElement('li');
    const networkElement = document.createElement('a');
    const networkButton = document.createElement('button');
    const networkinput = document.createElement('input');
    const networkConnectButton = document.createElement('button');
    const connectButton = document.getElementById('connectButton');

    networkinput.setAttribute('style', 'display: none');
    networkinput.setAttribute('id', 'password_input')
    networkConnectButton.setAttribute('style', 'display: none');
    connectButton.setAttribute('id', 'connectButton');
    
    networkElement.textContent = network.name;
    networkButton.textContent = `connect to ${network.name}`;
    networkConnectButton.textContent = `Confirm ${network.name}`;

    networkButton.addEventListener('click', () => {
      networkinput.setAttribute('style', 'display: block');
      networkConnectButton.setAttribute('style', 'display: block');
    });

    networkConnectButton.addEventListener('click', submitInput);

    // Add an event listener to the refresh button
    refreshButton.addEventListener('click', () => {
      window.location.reload();
    });

    // Add the refresh button to the container element
    refreshContainer.appendChild(refreshButton);

    networkContainer.appendChild(networkList);

    networkList.appendChild(networkButton);
    networkList.appendChild(networkElement);
    networkList.appendChild(networkButton);

    networkList.appendChild(networkinput);
    networkList.appendChild(networkConnectButton);

  });


