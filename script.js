/**
 * Navigation & Interactive Script for Emmanuel Kipngeno's Portfolio
 * - Sticky header scroll styling
 * - Professional 3-line hamburger to 'X' animation
 * - Mobile dropdown menu with backdrop overlay
 * - Smooth click handling, outside click, and keyboard accessibility
 */

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    if (navLinks.classList.contains('show')) {
        closeMenu();
    } else {
        openMenu();
    }
}

function openMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    if (hamburger) {
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
    }
    if (navLinks) {
        navLinks.classList.add('show');
    }
    if (navOverlay) {
        navOverlay.classList.add('show');
    }
    document.body.classList.add('menu-open');
}

function closeMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    if (hamburger) {
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }
    if (navLinks) {
        navLinks.classList.remove('show');
    }
    if (navOverlay) {
        navOverlay.classList.remove('show');
    }
    document.body.classList.remove('menu-open');
}

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Create backdrop overlay dynamically if not already in DOM
    let navOverlay = document.querySelector('.nav-overlay');
    if (!navOverlay) {
        navOverlay = document.createElement('div');
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
    }

    // Toggle menu on hamburger click
    if (hamburger) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Close menu when clicking backdrop overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', function () {
            closeMenu();
        });
    }

    // Close menu when clicking anywhere outside header and nav
    document.addEventListener('click', function (e) {
        if (navLinks && navLinks.classList.contains('show')) {
            if (!navLinks.contains(e.target) && (!hamburger || !hamburger.contains(e.target))) {
                closeMenu();
            }
        }
    });

    // Close menu when clicking any nav link
    if (navLinks) {
        navLinks.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });
    }

    // Close menu with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('show')) {
            closeMenu();
        }
    });

    // Reset menu on viewport resize above 768px
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('show')) {
            closeMenu();
        }
    });

    // Dynamic sticky header styling on scroll
    function handleScroll() {
        if (!header) return;
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check on load

    // Highlight current page link
    highlightCurrentPage();
});

function highlightCurrentPage() {
    const rawPath = window.location.pathname.split('/').pop().toLowerCase();
    const currentPath = (rawPath === '' || rawPath === 'my%20portfolio' || rawPath === 'portfolio') ? 'index.html' : rawPath;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(function (link) {
        const href = link.getAttribute('href');
        if (!href) return;
        const linkFile = href.split('#')[0].toLowerCase();

        if (linkFile === currentPath) {
            link.classList.add('active');
        } else if (!href.startsWith('#') && linkFile !== '') {
            link.classList.remove('active');
        }
    });
}