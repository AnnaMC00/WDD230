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


const year = date.getFullYear();
document.querySelector("#copyrigth").innerText = year;


const lastModif = new Date(document.lastModified);
const lastDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).format(lastModif);
const lastTime = new Intl.DateTimeFormat("en", { timeStyle: "medium", hour12: false }).format(lastModif);
document.querySelector("#last-update").innerText = `${lastDate} ${lastTime}`;