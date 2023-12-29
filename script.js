
var nav = document.querySelector('nav'); // Identify target as a variable

window.addEventListener('scroll', function(event) { // Listen for event
    event.preventDefault();

    if (window.scrollY <= 100) { 
        nav.style.backgroundColor = 'transparent'; // Transparent Color
    } 
    else {
        nav.style.backgroundColor = 'black'; // Black
        nav.style.opacity = '0.8';    // Opacity
    }
});