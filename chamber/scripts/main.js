
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


// DIRECTORY PAGE
const directoryButton = document.querySelector("#directory-button");
const article = document.querySelector("#directory-display");

const alternateGridList = () => {
    let className = article.className;
    if (className == "directory-grid") {
        article.classList.add("directory-list");
        article.classList.remove("directory-grid");
        directoryButton.textContent = "Grid";
    }
    else if (className == "directory-list") {
        article.classList.add("directory-grid");
        article.classList.remove("directory-list");
        directoryButton.textContent = "List";
    }
};

directoryButton.addEventListener("click", alternateGridList);

const url = "https://annamc00.github.io/wdd230/chamber/scripts/data.json";

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data);
}

getDirectoryData();

const displayDirectory = (businesses) => {
    const article = document.querySelector("#directory-display");
    businesses.forEach((business) => {
        let card = document.createElement("section");
        let h3 = document.createElement("h3");
        let icon = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("a");
        let url = document.createElement("a");
        let level = document.createAttribute("p");

        h3.textContent = business.name;
        icon.setAttribute("src", business.icon);
        icon.setAttribute("alt", `${business.name} icon.`);
        icon.setAttribute("loading", "lazy");
        address.textContent = business.address;
        phone.setAttribute("href", `tel:${business.phone}`);
        phone.textContent = business.phone;
        url.setAttribute("href", business.url);
        url.textContent = business.url;
        level.textContent = business.membership - level;

        card.appendChild(h3);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        article.appendChild(card);
    });
}

// -------------------- FOOTER ----------------------
const year = date.getFullYear();
document.querySelector("#copyrigth").innerText = year;


const lastModif = new Date(document.lastModified);
const lastDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).format(lastModif);
const lastTime = new Intl.DateTimeFormat("en", { timeStyle: "medium", hour12: false }).format(lastModif);
document.querySelector("#last-update").innerText = `${lastDate} ${lastTime}`;