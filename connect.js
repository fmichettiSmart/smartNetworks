
import { getNetworks } from './networks.js';

function submitInput() {
    // Get the password input element and the network object
    const passwordInput = document.getElementById('password_input');
    const networks = getNetworks();
    
    // Check if the password is correct
    if (passwordInput.value === network.password) {
        // If the password is correct, submit the form
        alert('Correct password.');
    } else {
        // If the password is incorrect, display an error message
        alert('Incorrect password. Please try again.');
    }
}

export { submitInput };