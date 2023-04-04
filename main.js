// Import the getNetworks function from the networks.js file
import { getNetworks } from './networks.js';
import { submitInput } from './connect.js';

// Get the array of network names from your JavaScript file
const networks = getNetworks();

const objectList = document.getElementById("object-list");

// Get the container element for the refresh button
const refreshContainer = document.getElementById('refresh_container');

// Create the refresh button
const refreshButton = document.createElement('button');

// Add the refresh button to the container element
refreshContainer.appendChild(refreshButton);

// Refresh button attributes
refreshButton.textContent = "Refresh";
refreshButton.classList.add("btn", "btn-primary", "mt-2");


// Add an event listener to the refresh button
refreshButton.addEventListener('click', () => {
  window.location.reload();
});

// Loop through the objects array and display each property in a separate HTML list item
networks.forEach(object => 
{
  const li = document.createElement("li");
  const networkName = document.createElement("a");
  const button = document.createElement("button");
  const passwordInput = document.createElement("input");
  const connectButton = document.createElement("button");

  // Password input attributes
  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("placeholder", "Enter Password");
  passwordInput.setAttribute("id", "passInput");
  passwordInput.classList.add("form-control");
  passwordInput.style.display = "none";

  // Connect button attributes
  connectButton.textContent = "Connect";
  connectButton.classList.add("btn", "btn-primary", "mt-2");
  connectButton.style.display = "none";

  // Network name attributes
  networkName.textContent = object.name;
  networkName.classList.add("font-weight-bold");

  // Button attributes
  button.textContent = `Connect to ${object.name}`;
  button.classList.add("btn", "btn-outline-primary", "mt-2");

  li.appendChild(networkName);
  li.appendChild(button);
  li.appendChild(passwordInput);
  li.appendChild(connectButton);

  objectList.appendChild(li);

  // Event listener for button click
  button.addEventListener("click", () => {
    passwordInput.style.display = "block";
    connectButton.style.display = "block";
  });

  
});