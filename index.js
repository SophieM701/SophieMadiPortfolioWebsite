// Scripts for the main page!

// Latch for initial animations
// Delay bounceIn
const bounceInEl = document.querySelectorAll('.bounceIn');
bounceInEl.forEach((el,i) => {
    setTimeout(() =>{
        el.classList.add('visible');
    }, 2000);
});


// Fade In and Up when elements appear on screen
const images = document.querySelectorAll('.fadeInUp');

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
