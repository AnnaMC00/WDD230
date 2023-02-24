
// ------------- HEADER -----------------------
const nav = document.querySelector(".navigation")
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
    nav.classList.toggle("responsive"), false
});


const date = new Date();

const topBanner = document.querySelector("#top-banner");
const day = date.getDay();
if (day == 1 || day == 2) {
    topBanner.style.display = "block";
}
else {
    topBanner.style.display = "none";
}

const completeDate = new Intl.DateTimeFormat("en", { dateStyle: "full" }).format(date);
document.querySelector("#date").innerText = completeDate;


// --------------------- MAIN ------------------------

// DISCOVER PAGE
// Images
let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imgOptions = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px 10px 0px"
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
}
else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

// Visits
const visitinfo = document.querySelector("#visitinfo");

let lastvisit = Number(window.localStorage.getItem("last-visit"));

if (lastvisit !== 0) {
    let daysmiliseconds = Date.now() - lastvisit;
    let days = (daysmiliseconds / 84600000).toFixed(0);

    if (days == 1) {
        visitinfo.textContent = `Your last visit was ${days} day ago! Welcome again!`;
    }
    else if (days == 0) {
        visitinfo.textContent = "Your last visit was today!"
    }
    else {
        visitinfo.textContent = `Your last visit was ${days} days ago! Welcome again!`;
    }
}
else {
    visitinfo.textContent = "This is your first visit! Welcome!";
}

localStorage.setItem("last-visit", Date.now())


// -------------------- FOOTER ----------------------
const year = date.getFullYear();
document.querySelector("#copyrigth").innerText = year;


const lastModif = new Date(document.lastModified);
const lastDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).format(lastModif);
const lastTime = new Intl.DateTimeFormat("en", { timeStyle: "medium", hour12: false }).format(lastModif);
document.querySelector("#last-update").innerText = `${lastDate} ${lastTime}`;