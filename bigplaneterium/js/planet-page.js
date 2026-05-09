/* PLANET FACT CARDS CLICK EFFECT */
const planetFactCards = document.querySelectorAll(".fact-card");

planetFactCards.forEach(function (card) {
  card.addEventListener("click", function () {
    card.classList.toggle("active");
  });
});


/* PLANET IMAGE HOVER GLOW */
const planetImg = document.querySelector(".planet-img");

if (planetImg) {
  planetImg.addEventListener("mousemove", function (e) {
    const rect = planetImg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    planetImg.style.filter = `
      drop-shadow(${(x - rect.width / 2) / 10}px ${(y - rect.height / 2) / 10}px 40px rgba(95,203,255,0.7))
    `;
  });

  planetImg.addEventListener("mouseleave", function () {
    planetImg.style.filter = "drop-shadow(0 0 45px rgba(95,203,255,0.6))";
  });
}