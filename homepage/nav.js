const mobileMenuButton = document.querySelector(".mobile-menu");
const menuContainer = document.querySelector(".menu-container ul");

mobileMenuButton.addEventListener("click", () => {
  menuContainer.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function (e) {
        e.stopPropagation(); // Prevent the click event from propagating to the document body
        navLinks.classList.toggle("active");
    });

    // Add a click event listener to the document body
    document.body.addEventListener("click", function () {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });

    // Prevent clicks inside the navigation menu from closing it
    navLinks.addEventListener("click", function (e) {
        e.stopPropagation();
    });
});
