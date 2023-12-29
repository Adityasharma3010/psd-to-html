
var nav = document.querySelector('nav');                                            // Identify target as a variable
var font = document.querySelectorAll(".fona");

window.addEventListener('scroll', function(event) {                                 // Listen for event
    event.preventDefault();

    if (window.scrollY <= 51) { 
        nav.style.backgroundColor = 'transparent';                                  // Transparent Color
        for (let i = 0; i < font.length; i++) {
            font[i].style.color = "black";                                          // if it have more then 0 then change color to Black
          }
          document.getElementById('img-links').src = 'images/sunroomLOGO2.png';       // Logo img for white background
          document.getElementById('activeow').classList.add('active1');             // add class of active link white bg
          document.getElementById('activeow').classList.remove('active2');          // remove class of active link white bg
    } 
    else {
        nav.style.backgroundColor = 'black';                                        // Black
        nav.style.opacity = '0.89';                                                  // Opacity
        for (let i = 0; i < font.length; i++) {                                     // if it have more then 0 then change color to white
            font[i].style.color = "white";
          }
          document.getElementById('img-links').src = 'images/sunroomLOGO2015.png';    // Logo img for black background
          document.getElementById('activeow').classList.add('active2');             // add class of active link black bg
          document.getElementById('activeow').classList.remove('active1');          //  remove class of active link black bg
    }

});