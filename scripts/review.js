let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

document.getElementById("counter-display").textContent = reviewCount;