let currentDate = new Date();
let currentDateString = currentDate.toDateString();
let dateArray = currentDateString.split(" ");
let month = dateArray[1];
let date = dateArray[2];
let year = dateArray[3];
let dateString = `${month} ${date}, ${year}`;
let newH = document.createElement("h4");
newH.innerText = dateString;
document.body.appendChild(newH)