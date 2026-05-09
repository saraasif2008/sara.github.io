const audio = document.getElementById("bg-audio");
const audioStatus = document.getElementById("audio-status");

function tryPlayAudio() {
  if (!audio) {
    return;
  }

  audio.play()
    .then(function () {
      if (audioStatus) {
        audioStatus.textContent = "Background audio is playing on loop.";

        setTimeout(function () {
          audioStatus.style.opacity = "0";
          audioStatus.style.transition = "0.5s ease";
        }, 2500);
      }
    })
    .catch(function () {
      if (audioStatus) {
        audioStatus.textContent = "Click anywhere once to start the looped background audio.";
      }
    });
}

tryPlayAudio();

document.addEventListener("click", function handleFirstClick() {
  tryPlayAudio();
  document.removeEventListener("click", handleFirstClick);
});

document.addEventListener("click", function (event) {
  if (event.target.closest("a, button, video")) {
    return;
  }

  const star = document.createElement("span");
  star.className = "click-star";
  star.textContent = "✦";
  star.style.left = event.clientX + "px";
  star.style.top = event.clientY + "px";

  document.body.appendChild(star);

  setTimeout(function () {
    star.remove();
  }, 900);
});

const milkyCards = document.querySelectorAll(".milky-card, .milky-wide-card, .milky-feature-row");

milkyCards.forEach(function (card) {
  card.addEventListener("mousemove", function (event) {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(98, 198, 255, 0.16), transparent 35%),
      rgba(8, 18, 45, 0.72)
    `;
  });

  card.addEventListener("mouseleave", function () {
    card.style.background = "rgba(8, 18, 45, 0.72)";
  });
});

/* FACTS SLIDER */
const scrollContainer = document.getElementById("thingsScroll");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

if (scrollContainer && leftBtn && rightBtn) {
  rightBtn.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: 360,
      behavior: "smooth"
    });
  });

  leftBtn.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: -360,
      behavior: "smooth"
    });
  });
}

/* TABS */
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const selectedTab = button.getAttribute("data-tab");

    tabButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    tabContents.forEach(function (content) {
      content.classList.remove("active");
    });

    button.classList.add("active");
    document.getElementById(selectedTab).classList.add("active");
  });
});

/* SHOW PLANET CARDS ONLY AFTER CLICKING EXPLORE */
const showPlanetsBtn = document.getElementById("showPlanetsBtn");
const planetList = document.getElementById("planet-list");

if (showPlanetsBtn && planetList) {
  showPlanetsBtn.addEventListener("click", function (event) {
    event.preventDefault();

    planetList.classList.add("show");

    planetList.scrollIntoView({
      behavior: "smooth"
    });
  });
}