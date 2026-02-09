
const references = [
       {
    resource: "Hero Image",
    source: "Pexels",
    author: "Justin Doherty",
    link: "https://images.pexels.com/photos/4565724/pexels-photo-4565724.jpeg",
    description: "Main background image for the immersive experience section."
    },
    {
    resource: "Concert Image",
    source: "Pexels",
    author: "Thibault Trillet",
    link: "https://images.pexels.com/photos/167605/pexels-photo-167605.jpeg",
    description: "Secondary Background image for the home page."
    },
    {
        resource: "Orbitron Font",
        author: "MAtt McInerney",
        source: "Google Fonts",
        link: "https://fonts.google.com/specimen/Orbitron",
        description: "Cyberpunk-style heading font used throughout the website."
    }
];


function initSite() {
    updateFooter();
    setupNav();
    
    const boothForm = document.querySelector('#booth-form');
    const refTable = document.querySelector('#table-body');

    if (boothForm) setupForm(boothForm);
    if (refTable) displayReferences(references, refTable);
}


function updateFooter() {
    const yearSpan = document.querySelector("#currentyear");
    const lastModSpan = document.querySelector("#lastModified");

    if (yearSpan && lastModSpan) {
        yearSpan.textContent = new Date().getFullYear();
        lastModSpan.textContent = document.lastModified;
    }
}

function setupNav() {
    const hambutton = document.querySelector('.hamburger');
    const mainnav = document.querySelector('.nav-menu');
    
    if (hambutton && mainnav) {
        hambutton.addEventListener('click', () => {
            mainnav.classList.toggle('show');
            hambutton.textContent = mainnav.classList.contains('show') ? '✕' : '☰';
        });
    }
}

function displayReferences(data, targetElement) {
    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.resource}</td>
            <td><a href="${item.link}" target="_blank">${item.source}</a> by ${item.author}</td>
            <td>${item.description}</td>
        `;
        targetElement.appendChild(row);
    });
}

function setupForm(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#userName').value;
        const city = document.querySelector('#userCity').value;
        localStorage.setItem('userCity', city);
        
        document.querySelector('#response-message').innerHTML = `<h3>Thanks, ${name}!</h3><p>Saved: ${city}</p>`;
        form.style.display = 'none';
    });
}

initSite();