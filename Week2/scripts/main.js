const currentDate = new Date();
const year = currentDate.getFullYear();

document.querySelector("#copyrigth").innerText = year;


const lastModif = new Date(document.lastModified);
const lastDate = new Intl.DateTimeFormat("en-US", {year:"numeric", month:"2-digit", day:"2-digit"}).format(lastModif);
const lastTime = new Intl.DateTimeFormat("en", {timeStyle:"medium", hour12:false}).format(lastModif);
document.querySelector("#last-update").innerText = `Last Updated: ${lastDate} ${lastTime}`;