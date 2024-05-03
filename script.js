function openCard() {
    var card = document.getElementById('card');
    card.style.transform = "rotateY(180deg)";
    
    var hiddenMessage = document.getElementById('hidden-message');
    hiddenMessage.style.display = "block";
}
 // Function to display the cute face and open the message
 function openMessage() {
    // Cute face emoji
    var cuteFace = " ̇ ̇";
    alert("Aww, that's okay" + cuteFace);
    showMessage();
}

// Function to display the message
function showMessage() {
    alert("Do you love Ayuu?");
}

// When the page loads, display the message
window.onload = function () {
    showMessage();
};

// When the user closes the alert, prompt them with a confirmation dialog
window.onbeforeunload = function () {
    var response = confirm("Do you love Ayuu?");
    if (response) {
        alert("Great! Here's the message");
    } else {
        openMessage();
    }
};