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

        h3.textContent = business.name;
        icon.setAttribute("src", business.icon);
        icon.setAttribute("alt", `${business.name} icon.`);
        icon.setAttribute("loading", "lazy");
        address.textContent = business.address;
        phone.setAttribute("href", `tel:${business.phone}`);
        phone.textContent = business.phone;
        url.setAttribute("href", business.url);
        url.textContent = "Visit Us!";

        card.appendChild(h3);
        card.appendChild(icon);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);

        article.appendChild(card);
    });
}