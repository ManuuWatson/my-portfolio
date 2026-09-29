document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            // Toggle display between "none" and "flex"
            if (navLinks.style.display === "flex") {
                navLinks.style.display = "none";
            } else {
                navLinks.style.display = "flex";
            }
        });
    }
});
  

  