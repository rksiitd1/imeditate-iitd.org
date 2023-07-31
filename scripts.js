// Burger menu and navigation bar
let navLinks = document.querySelector(".nav_links");
let burger = document.querySelector(".burger");

function toggleNav() {
    navLinks.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
}

burger.addEventListener("click", toggleNav);

// Toggle sections
let links = document.querySelectorAll(".nav_links li");

function toggleSection() {
    // Remove active class from all sections
    document.querySelectorAll(".section").forEach((section) => {
        section.classList.remove("active");
    });

    // Add active class to clicked section
    let target = this.getAttribute("data-target");
    document.querySelector("#" + target).classList.add("active");
}

links.forEach((link) => {
    link.addEventListener("click", toggleSection);
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
