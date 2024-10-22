// JavaScript to open the modal
function openModal() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'block'; // Ensure the modal is displayed
    setTimeout(() => {
        modal.classList.add('show');
    }, 10); // Slight delay to ensure display change happens before the transition
}

// JavaScript to close the modal
function closeModal() {
    var modal = document.getElementById('myModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none'; // Hide the modal after the transition
    }, 800); // Match the transition duration
}

// Event listener to close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Event listener to toggle navbar background color on scroll


// Event listeners for open/close buttons
document.getElementById('openModal').onclick = openModal;
document.querySelector('.close').onclick = closeModal;
window.onclick = function(event) {
    if (event.target == document.getElementById('myModal')) {
        closeModal();
    }
}
function handleLogin(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (email && password) {
        // Perform any additional validation or login logic here if needed

        // Redirect to the chat page
        window.location.href = 'Chat.html';
    } else {
        alert('Please enter both email and password.');
    }
}



