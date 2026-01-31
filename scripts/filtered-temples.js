const currentYearSpan = document.querySelector("#currentyear");
const lastModifiedSpan = document.querySelector("#lastModified");

currentYearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = `Last Modification: ${document.lastModified}`;

const temples = [
    {
        templeName: "Albuquerque New Mexico Temple",
        location: "Albuquerque, New Mexico",
        dedicated: "2000, March, 5",
        area: 34245,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/albuquerque-new-mexico-temple/albuquerque-new-mexico-temple-56335-main.jpg"

    },
    {
        templeName: "Boise Idaho Temple",
        location: "Boise, Idaho",
        dedicated: "1984, May, 25",
        area: 35868,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/boise-idaho-temple/boise-idaho-temple-65241-main.jpg"
    },
    {
        templeName: "Las Vegas Temple",
        location: "Las Vegas, Nevada",
        dedicated: "1989, December, 16",
        area: 80350,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/las-vegas-nevada-temple/las-vegas-nevada-temple-35604-main.jpg"
    },
    {
        templeName: "Meridian Idaho Temple",
        location: "Meridian, Idaho",
        dedicated: "2017, November, 19",
        area: 67331,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-65268.jpg"
    },
    {
        templeName: "St. Paul Minnesota Temple",
        location: "St. Paul, Minnesota",
        dedicated: "2000, January, 9",
        area: 11411,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/st.-paul-minnesota-temple/st.-paul-minnesota-temple-64065.jpg"
    },
    {
        templeName: "Orlanda Florida Temple",
        location: "Orlando, Florida",
        dedicated: "1994, October, 9",
        area: 70000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-51119.jpg"
    },
    {
        templeName: "Regina Sasketchewan Temple",
        location: "Regina, Saskatchewan",
        dedicated: "1999, November, 14",
        area: 10700,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/regina-saskatchewan-temple/regina-saskatchewan-temple-6902.jpg"
    },
    {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah",
        dedicated: "1975, November, 11",
        area: 143969,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/st.-george-utah-temple/st.-george-utah-temple-65309.jpg"
    },
    {
        templeName: "Winnipeg Manitoba Temple",
        location: "Winnipeg, Manitoba",
        dedicated: "2021, October, 31",
        area: 16100,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/winnipeg-manitoba-temple/winnipeg-manitoba-temple-63482.jpg"
    }
]

const templeCardsContainer = document.querySelector(".temple-cards-container");

function createTempleCard(filteredTemples) {
    templeCardsContainer.innerHTML = "";

    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        templeCardsContainer.appendChild(card);
    });
}


const homeLink = document.querySelector("#Home");
const oldLink = document.querySelector("#Old");
const newLink = document.querySelector("#New");
const largeLink = document.querySelector("#Large")
const smallLink = document.querySelector("#Small")

oldLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    }));
});

newLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    }));
});

largeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area > 90000));   
});

smallLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.area < 10000));   
});

homeLink.addEventListener("click", () => {
    createTempleCard(temples);  
});

createTempleCard(temples);