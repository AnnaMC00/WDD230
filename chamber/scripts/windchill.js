const temp = parseInt(document.querySelector("#grades").textContent);
const windspeed = parseInt(document.querySelector("#wind-speed").textContent);
const windchill = document.querySelector("#wind-chill");

if (temp <= 50 && windspeed > 3) {
    let f = 35.74 + 0.6215 * temp - 35.75 * windspeed ** 0.16 + 0.4275 * temp * windspeed ** 0.16;
    f = f.toFixed(1);
    windchill.textContent = `${f}°F`;
}
else {
    console.log(windchill);
}