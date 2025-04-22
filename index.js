// Scripts for the main page!
console.log("TEST");

// Fade In and Up when elements appear on screen
const images = document.querySelectorAll('.fadeInUp');

/*
images.forEach(image => {
    image.classList.add('TEST');
});
*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {threshold: 0.1});

images.forEach(image => {
    observer.observe(image);
});
