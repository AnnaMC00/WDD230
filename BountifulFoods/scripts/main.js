// ------------------ HEADER -----------------
const nav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    nav.classList.toggle("responsive"), false
});


// ------------------- MAIN ---------------------
let slideIndex = 1;
showSlides();

function currentSlide(slideNumber) {
    showSlides(slideIndex = slideNumber);
}

function showSlides(slideNumber) {


    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slideNumber != null) {
        slideIndex = slideNumber;

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";

        slideIndex++;
    }
    else {
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";


        slideIndex++;
        setTimeout(showSlides, 8000);
    }


}