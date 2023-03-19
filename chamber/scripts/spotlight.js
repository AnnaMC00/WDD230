const gold1 = document.querySelector("#gold1");
const gold2 = document.querySelector("#gold2");
const silver = document.querySelector("#silver");

const url = "https://annamc00.github.io/wdd230/chamber/scripts/data.json";

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    constructSpotlights(data);
}

getDirectoryData();

const randomBusiness = (businesses, level) => {
    const results = businesses.filter(business => business.membership == level);
    return results;
}

const constructSpotlights = (businesses) => {
    const gold = randomBusiness(businesses, "Gold");
    console.log(gold);

    gold1.innerHTML = `<h3>${gold[0].name}</h3>
                    <p>${gold[0].description}</p>
                    <hr>
                    <a href="#" class="info">${gold[0].mail}</a>
                    <a href="#" class="info">${gold[0].url}</a>`;

    gold2.innerHTML = `<h3>${gold[1].name}</h3>
                    <p>${gold[1].description}</p>
                    <hr>
                    <a href="#" class="info">${gold[1].mail}</a>
                    <a href="#" class="info">${gold[1].url}</a>`;

    const silver = randomBusiness(businesses, "Silver");

    silver.innerHTML = `<h3>${silver[0].name}</h3>
                    <p>${silver[0].description}</p>
                    <hr>
                    <a href="#" class="info">${silver[0].mail}</a>
                    <a href="#" class="info">${silver[0].url}</a>`;
} 