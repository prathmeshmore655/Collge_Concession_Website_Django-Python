// Function to debounce search input for performance optimization
let debounceTimer;
function debouncedSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function() {
        const query = document.getElementById('query').value;
        console.log("Searching for:", query);
        // You can add AJAX calls here to filter results without reloading the page.
    }, 500); // 500ms delay for debounce
}

// Function to show the details popup for a specific student
function showDetails(studentId) {
    const popup = document.getElementById(`details_${studentId}`);
    popup.style.display = 'flex';
}

// Function to close the details popup
function closepopup() {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        popup.style.display = 'none';
    });
}

// Optional: Close the popup if clicked outside the popup content area
window.onclick = function(event) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
}

// Function to toggle show password functionality
function showPassword() {
    const passwordField = document.getElementById('b');
    const checkbox = document.getElementById('show_password');
    if (checkbox.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}

// Handling the delete confirmation
function confirmDelete() {
    const deleteId = document.querySelector('.delete').value;
    if (!deleteId) {
        alert("Please enter a valid ID to delete.");
        return false;
    }
    return confirm("Are you sure you want to delete this record?");
}

// Event listener for the delete form submission (optional if confirmation needed)
const deleteForm = document.querySelector('form[action="{% url "delete" %}"]');
if (deleteForm) {
    deleteForm.addEventListener('submit', function(event) {
        if (!confirmDelete()) {
            event.preventDefault(); // Stop form submission if confirmation is denied
        }
    });
}
