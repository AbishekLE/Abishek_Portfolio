// JavaScript for fullscreen sections with close button functionality
document.addEventListener('DOMContentLoaded', () => {
    // Add click event to each section title to open in fullscreen
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('click', (e) => {
            openFullscreen(section);
            e.stopPropagation(); // Prevent event bubbling
        });
    });

    // Close fullscreen when clicking on the close button
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('close-btn')) {
            closeFullscreen();
        }
    });
});

function openFullscreen(section) {
    // Prevent opening a new section if one is already open
    if (document.querySelector('.fullscreen-section')) return;

    const fullscreenSection = document.createElement('div');
    fullscreenSection.classList.add('fullscreen-section');

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = section.innerHTML;

    const closeButton = document.createElement('button');
    closeButton.classList.add('close-btn');
    closeButton.textContent = 'X';

    content.appendChild(closeButton);
    fullscreenSection.appendChild(content);

    document.body.appendChild(fullscreenSection);
}

function closeFullscreen() {
    const fullscreenSection = document.querySelector('.fullscreen-section');
    if (fullscreenSection) {
        fullscreenSection.remove();
    }
}

 // Wait for the DOM content to be fully loaded
 document.addEventListener("DOMContentLoaded", function() {
  var mybutton = document.getElementById("scrollToTopBtn");

  // Check if the button exists before proceeding
  if (!mybutton) {
      console.error("Button not found");
      return;
  }

  // When the user scrolls down 100px from the top of the document, show the button
  window.onscroll = function() {
      // Check the scroll position
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          mybutton.style.display = "inline-block"; // Show the button
          console.log("inside if my button");
          
          
      } else {
          mybutton.style.display = "none"; // Hide the button
      }
  };
});

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"  // Smooth scrolling effect
        });
      }

      

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
