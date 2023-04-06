// SLIDESHOW
let slideIndex = 1;
showSlides();

function currentSlide(slideNumber) {
    showSlides(slideIndex = slideNumber);
}

function showSlides(slideNumber) {


    let slides = document.getElementsByClassName("slides");
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


// WEATHER
const urlweather = "https://api.openweathermap.org/data/2.5/forecast?lat=33.1581&lon=-117.3506&cnt=4&mode=json&units=imperial&appid=44b60a22554b5737d921f148fea203d0";

async function apiFetch() {
    try {
        const response = await fetch(urlweather);
        if (response.ok) {
            const data = await response.json();
            setValues(data);
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();

const tempToday = document.querySelector("#grades-today");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const forecastGrades = document.getElementsByClassName("grades");

function setValues(weatherdata) {
    let tempData = (index) => {
        let temp = weatherdata.list[index].main.temp.toFixed();
        return temp;
    }
    let humid = weatherdata.list[0].main.humidity;
    let desc = weatherdata.list[0].weather[0].description;

    desc = desc.split(" ");

    for (let i = 0; i < desc.length; i++) {
        desc[i] = desc[i][0].toUpperCase() + desc[i].substr(1);
    }
    desc = desc.join(" ");

    tempToday.textContent = tempData(0);
    description.innerHTML = `<b>${desc}</b>`;
    humidity.textContent = humid;

    for (let d = 0; d < 3; d++) {
        forecastGrades[d].textContent = tempData(d + 1);
    }
}

// DRINKS COUNT
let drinksCount = Number(window.localStorage.getItem("drinks-count"));
const drinks = document.querySelector("#number-drinks").textContent = drinksCount;