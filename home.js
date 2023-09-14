
// Get references to the radio buttons and manual navigation labels
const radioButtons = document.querySelectorAll('input[name="radio-btn"]');
const manualNavigationLabels = document.querySelectorAll('.manual-btn');

// Get the slide container and slides
const slideContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');

// Initialize the index for the current slide
let currentSlideIndex = 0;

// Function to show a specific slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.opacity = 1;
            radioButtons[i].checked = true;
        } else {
            slide.style.opacity = 0;
        }
    });
}

// Function to handle manual navigation
manualNavigationLabels.forEach((label, i) => {
    label.addEventListener('click', () => {
        currentSlideIndex = i;
        showSlide(currentSlideIndex);
    });
});

// Function to automatically advance the slideshow and loop
function autoSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

// Start the automatic slideshow and loop
setInterval(autoSlide, 7000); // Change this value to adjust the auto slide interval (in milliseconds)

