const urlweather = "https://api.openweathermap.org/data/2.5/weather?q=Nashville&units=imperial&appid=3c41b73bcb169357363e3d2f07586d38";

async function apiFetch() {
    try {
        const response = await fetch(urlweather);
        if (response.ok) {
            const data = await response.json();
            setValues(data);
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

const temp = document.querySelector("#grades");
const windspeed = document.querySelector("#wind-speed");
const windchill = document.querySelector("#wind-chill");
const description = document.querySelector("#weather-description");
const iconDiv = document.querySelector("#weather-icon");
const icon = document.createElement("img");

function setValues(weatherdata) {
    const iconurl = `https://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`;
    let desc = weatherdata.weather[0].description;
    desc = desc.split(" ");

    for (let i = 0; i < desc.length; i++) {
        desc[i] = desc[i][0].toUpperCase() + desc[i].substr(1);
    }
    desc = desc.join(" ");

    const t = weatherdata.main.temp.toFixed();
    const ws = weatherdata.wind.speed;

    if (t <= 50 && ws > 3) {
        let f = 35.74 + 0.6215 * t - 35.75 * ws ** 0.16 + 0.4275 * t * ws ** 0.16;
        f = f.toFixed(1);
        windchill.textContent = `${f}°F`;
    }
    else {
        windchill.textContent = "N/A";
    }

    temp.textContent = t;
    description.innerHTML = `<b>${desc}</b>`;
    windspeed.textContent = ws;
    icon.setAttribute("src", iconurl);
    icon.setAttribute("alt", desc);
    iconDiv.appendChild(icon);
}