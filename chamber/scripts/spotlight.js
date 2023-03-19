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
    const goldlist = randomBusiness(businesses, "Gold");

    gold1.innerHTML = `<h3>${goldlist[0].name}</h3>
                    <p>${goldlist[0].description}</p>
                    <hr>
                    <a href="#" class="info">${goldlist[0].mail}</a>
                    <a href="#" class="info">${goldlist[0].url}</a>`;

    gold2.innerHTML = `<h3>${goldlist[1].name}</h3>
                    <p>${goldlist[1].description}</p>
                    <hr>
                    <a href="#" class="info">${goldlist[1].mail}</a>
                    <a href="#" class="info">${goldlist[1].url}</a>`;

    const silverlist = randomBusiness(businesses, "Silver");

    silver.innerHTML = `<h3>${silverlist[0].name}</h3>
                    <p>${silverlist[0].description}</p>
                    <hr>
                    <a href="#" class="info">${silverlist[0].mail}</a>
                    <a href="#" class="info">${silverlist[0].url}</a>`;
} 