// ============= component Functions ============= //

// === Add active class ===:
function removeActiveClass(ele) {
  ele.forEach((el) => el.classList.remove("active"));
}

// === remove active class ===:
function addActiveClass(ele) {
  ele.forEach((el) => el.classList.add("active"));
}

// =========== create overlay function =========== //
function createOverlay() {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");
  document.body.appendChild(overlay);
}

// ============ toggle Theme Mode ================ //
// === Get the variables ===:
let themeIcon = document.querySelector(".theme__mode img");
let localData = localStorage.getItem("theme");

// === Check the localStorage Theme ===:
if (localData) {
  localData == "light"
    ? (themeIcon.src = "assets/svg/moon.svg")
    : (themeIcon.src = "assets/svg/sun.svg");
  document.body.classList.add(localData);
}

// === Change The Theme function ===:
themeIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeIcon.src = "assets/svg/sun.svg";
    localStorage.setItem("theme", "dark");
    document.body.classList.remove("light");
    // === add the audio to the body ===:
    const audio = document.createElement("audio");
    audio.src = "assets/audio/audio_light-on.mp3";
    audio.play();
    audio.remove();
  } else {
    themeIcon.src = "assets/svg/moon.svg";
    document.body.classList.add("light");
    localStorage.setItem("theme", "light");
    // === add the audio to the body ===:
    const audio = document.createElement("audio");
    audio.src = "assets/audio/audio_light-off.mp3";
    audio.play();
    audio.remove();
  }
});

// ===== toggle open class to navbar Menu ======== //

let toggleBtn = document.querySelector(".toggle__manu");

toggleBtn.addEventListener("click", () => toggleBtn.classList.toggle("open"));

document.addEventListener("click", () => {
  if (toggleBtn.classList.contains("open")) {
    // toggleBtn.classList.remove("open");
    console.log("alright");
  }
});

// ===== toggle open class to lang Menu ======== //

let langMenu = document.querySelector(".website__lang");

langMenu.addEventListener("click", () => langMenu.classList.toggle("open"));

// document.addEventListener("click", (e) => {
//   if (langMenu.classList.contains("open") && !e.target.classList.contains(".toggle__manu")) {
// toggleBtn.classList.remove("open");
//       console.log("Hello");
//   }
// });

// ===== toggle between the about filter ======= //

let buttons = document.querySelectorAll("#about .filter li");
let divs = document.querySelectorAll("#about .info div");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons.forEach((button) => button.classList.remove("active"));
    e.target.classList.add("active");

    divs.forEach((div) => {
      div.classList.remove("active");
      if (div.dataset.text === e.target.dataset.text) {
        div.classList.add("active");
      }
    });
  });
});

// ============ Animate The Svg ================ //
let skills = document.querySelectorAll(".skills");
let progress = document.querySelectorAll(".skills .number");
let circle = document.querySelectorAll(".skills .circle");
let length = 80;
let start = false;

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= skills.offsetTop - window.innerHeight / 1.5) {

//   }
// });

progress.forEach((prog) => {
  let counter = setInterval(() => {
    prog.textContent++;
    if (prog.textContent === prog.dataset.number) {
      clearInterval(counter);
    }
  }, 100 / prog.dataset.number);
});


circle.forEach((cir) => {
  cir.style.strokeDashoffset = length;
});
//# sourceMappingURL=main.js.map