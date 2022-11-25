// Countdown Timer 
function countdown() {// here is our function "countdown"
    var seconds = document.getElementById("seconds").value;// here we have our variable "seconds" 
    
    function tick() {//here is our nested function "tick"
        seconds = seconds - 1;
        timer.innerHTML = seconds;
    setTimeout(tick, 1000);//here the program knows that it has to pause for 1000 milliseconds
    if(seconds == -1) {//here is our if statement
        alert("Time's up!");//here is the text the program will display when the conditions for the if statement is done
    }
    }
    tick();
}

// Slideshow Challenge

let slideIndex = 1;// here is pur block scoped variable declaration 
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {// here is our function for the next/previous controls
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {// here is our function for the image controls
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}// here is our first "if" statement
    if (n < 1) {slideIndex = slides.length}// here is our second "if" statement
    for (i = 0; i < slides.length; i++) {// here is our first "for" statement
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {// here is our second "for" statement
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}