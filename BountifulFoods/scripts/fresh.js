const url = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function getFruitData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayOptions(data);

    const button = document.getElementById("button-event");
    button.addEventListener("click", orderDetails);

    function orderDetails() {

        function getIdValue(id) {
            return document.getElementById(id).value;
        }

        function setTextContent(id, value) {
            document.getElementById(id).textContent = value;
        }

        const firstName = getIdValue("first-name");
        const email = getIdValue("email");
        const phone = getIdValue("phone");
        const fruit1Index = getIdValue("fruit1");
        const fruit2Index = getIdValue("fruit2");
        const fruit3Index = getIdValue("fruit3");
        const instructions = getIdValue("special-instructions");

        if (firstName == "") {
            return;
        }
        if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/)) {
            return;
        }
        if (fruit1Index == "" || fruit2Index == "" || fruit3Index == "") {
            return;
        }

        function sum(index1, index2, index3, specific) {
            return data[index1].nutritions[specific] + data[index2].nutritions[specific] + data[index3].nutritions[specific];
        }

        const date = new Date();
        const completeDate = new Intl.DateTimeFormat("en", { dateStyle: "full" }).format(date);


        setTextContent("details-first-name", firstName);
        setTextContent("details-email", email);
        setTextContent("details-phone", phone);
        setTextContent("details-fruit1", data[fruit1Index].name);
        setTextContent("details-fruit2", data[fruit2Index].name);
        setTextContent("details-fruit3", data[fruit3Index].name);
        setTextContent("details-instructions", instructions);
        setTextContent("carbohydrates", sum(fruit1Index, fruit2Index, fruit3Index, "carbohydrates"));
        setTextContent("protein", sum(fruit1Index, fruit2Index, fruit3Index, "protein"));
        setTextContent("fat", sum(fruit1Index, fruit2Index, fruit3Index, "fat"));
        setTextContent("sugar", sum(fruit1Index, fruit2Index, fruit3Index, "sugar"));
        setTextContent("calories", sum(fruit1Index, fruit2Index, fruit3Index, "calories"));
        setTextContent("details-date", completeDate);

        document.getElementById("order-details").style.display = "block";
    }
}

getFruitData();

function displayOptions(fruitdata) {
    const selectElements = document.getElementsByClassName("fruit");

    for (let f = 0; f < fruitdata.length; f++) {
        let fruitname = fruitdata[f].name;
        for (let e = 0; e < selectElements.length; e++) {
            selectElements[e].innerHTML += `<option value=${f}>${fruitname}</option>`
        }
    }
}

function addDrink() {
    let drinksCount = Number(window.localStorage.getItem("drinks-count"));

    localStorage.setItem("drinks-count", drinksCount + 1);
}

function closeDetails() {
    document.getElementById("order-details").style.display = "none";
}