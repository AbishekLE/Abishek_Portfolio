// JavaScript to trigger fade-in effect on page load
window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    container.style.opacity = 1;
  });


      // Get elements
const sidebar = document.getElementById('sidebar');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');

// Open the sidebar
openBtn.addEventListener('click', function() {
  sidebar.style.left = '0'; // Slide in the sidebar
  document.body.style.marginLeft = '250px'; // Shift content to the right
});

// Close the sidebar
closeBtn.addEventListener('click', function() {
  sidebar.style.left = '-250px'; // Hide the sidebar
  document.body.style.marginLeft = '0'; // Reset content position
});

// Add event listener to dropdowns to toggle submenus
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', function() {
    this.classList.toggle('active');
  });
});

