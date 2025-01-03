// Function to toggle the chatbot iframe visibility
function toggleChatbot() {
    var iframe = document.getElementById('chatbot-iframe');
    var toggleButton = document.getElementById('chatbot-toggle');
    
    // If iframe is minimized, expand it; otherwise, minimize it
    if (iframe.style.height === '70px') {
        iframe.style.height = '500px';  // Maximize the iframe
        toggleButton.innerHTML = '&#45;'; // Change button to "close" (-)
    } else {
        iframe.style.height = '70px';  // Minimize the iframe
        toggleButton.innerHTML = '&#43;'; // Change button to "open" (+)
    }
}
