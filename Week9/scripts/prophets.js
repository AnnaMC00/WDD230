const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetsData() {
    const response = await fetch(url);
    const data = await response.json();
    displayProphets(data.prophets);
}

getProphetsData();

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards");
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let image = document.createElement("img");
        let pBirthDate = document.createElement("p");
        let pBirthPlace = document.createElement("p");

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        pBirthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        pBirthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        image.setAttribute("src", prophet.imageurl);
        image.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "340");
        image.setAttribute("heigth", "440");

        card.appendChild(h2);
        card.appendChild(pBirthDate);
        card.appendChild(pBirthPlace);
        card.appendChild(image);

        cards.appendChild(card);
    });
}