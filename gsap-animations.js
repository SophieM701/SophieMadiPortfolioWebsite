// GSAP Animations for Sophie Madi's Portfolio Website

// Wait for DOM to load before attempting to run GSAP Animations
document.addEventListener('DOMContentLoaded', (event) => {

    // Now that the DOM has loaded, we can run GSAP things

    // Initial test animation
    /*
    gsap.to('.box', {
        rotation: 360,
        duration: 2
    });
    */

    // Register Scroll Plugin
    gsap.registerPlugin(ScrollTrigger);

    // Lead Image Animations
    // On scroll, increase width of image to fill the view window
    gsap.to('.lead-image', {
        scrollTrigger: {
            trigger: '.lead-image',
            scrub: 0.2,
        },
        width: '100%'
    });

});
