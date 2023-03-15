const visitinfo = document.querySelector("#visitinfo");

let lastvisit = Number(window.localStorage.getItem("last-visit"));

if (visitinfo) {
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
}

localStorage.setItem("last-visit", Date.now())