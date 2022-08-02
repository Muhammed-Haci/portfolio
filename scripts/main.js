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
  localData == "light" ? themeIcon.src = "assets/svg/moon.svg" : themeIcon.src = "assets/svg/sun.svg" ;
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
//# sourceMappingURL=main.js.map
