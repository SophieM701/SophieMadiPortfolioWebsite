// Scripts for the main page!

// Latch for initial animations
// Delay bounceIn
const bounceInEl = document.querySelectorAll('.bounceIn');
bounceInEl.forEach((el,i) => {
    setTimeout(() =>{
        el.classList.add('visible');
    }, 1000);
});

// Delay main content fade in
const fadeInEl = document.querySelectorAll('.fadeInUpInit');
fadeInEl.forEach((el,i) => {
    setTimeout(() =>{
        el.classList.add('visible');
    }, 600);
});

// Cascade fade in
const fadeInCascade = document.querySelectorAll('.fadeInUpCascade');
fadeInCascade.forEach((el,i) => {
    setTimeout(() =>{
        el.classList.add('visible');
    }, i*150);
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
