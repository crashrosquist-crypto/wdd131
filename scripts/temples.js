const currentYear = document.getElementById("year");
const lastMod = document.getElementById("lastModified")

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (lastMod) {
    lastMod.textContent = document.lastModified;
}

document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.querySelector(".hamburger");

    const menu = document.querySelector("nav ul");

    if (!hamburger || !menu) {
        console.log("Couldn't find hamburger on menu!");
        return;
    }

    hamburger.addEventListener("click", function() {

        menu.classList.toggle("show");
        
        if (menu.classList.contains("show")) {
            hamburger.textContent = "X";
        } else {
            hamburger.textContent = "☰";

        }
        
        });
    });

