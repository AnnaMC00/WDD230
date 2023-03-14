const currentTemp = document.createElement("p");
const figure = document.createElement("figure");
const h2 = document.createElement("h2");
const weatherIcon = document.createElement("img");
const captionDesc = document.createElement("figcaption");
const main = document.querySelector("main");

const url = "https://api.openweathermap.org/data/2.5/weather?q=Fairbanks&units=imperial&appid=3c41b73bcb169357363e3d2f07586d38";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
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

function displayResults(weatherdata) {
    currentTemp.innerHTML = `The current temperature in ${weatherdata.name},Alaska is <strong>${weatherdata.main.temp.toFixed(0)}</strong>`;
    h2.textContent = "Current Condition Icon";

    const iconurl = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    let desc = weatherdata.weather[0].description;
    desc = desc.split(" ");

    for (let i = 0; i < desc.length; i++) {
        desc[i] = desc[i][0].toUpperCase() + desc[i].substr(1);
    }
    desc = desc.join(" ");

    weatherIcon.setAttribute("src", iconurl);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = desc;

    figure.appendChild(weatherIcon);
    figure.appendChild(captionDesc);
    main.appendChild(currentTemp);
    main.appendChild(h2);
    main.appendChild(figure);
}