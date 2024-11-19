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

    // Get the button element
    var mybutton = document.getElementById("scrollToTopBtn");

    // When the user scrolls down 100px from the top of the document, show the button
    window.onscroll = function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };


    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"  // Smooth scrolling effect
        });
      }
