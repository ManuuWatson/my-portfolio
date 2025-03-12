const roles = [
    "Web Developer",
    "Graphic Designer",
    "WordPress Developer",
    "Figma Designer",
    "Data Analyst"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 1000;
const textElement = document.getElementById("typed-text");

function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? erasingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        speed = delayBetweenRoles;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeEffect, speed);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 1000);
});

  

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    hamburger.addEventListener('click', function() {
      // Toggle display between "none" and "flex"
      if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
      } else {
        navLinks.style.display = "flex";
      }
    });
  });
  