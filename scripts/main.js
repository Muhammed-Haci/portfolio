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

// ===== toggle "open" class to navbar Menu ======== //

let toggleBtn = document.querySelector(".toggle__manu");

toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleBtn.classList.toggle("open")
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("toggle__manu")) {
    toggleBtn.classList.remove("open");
  }
});

// ===== toggle "open" class to lang Menu ======== //

let langMenu = document.querySelector(".website__lang");

langMenu.addEventListener("click", (e) => {
  e.stopPropagation();
  langMenu.classList.toggle("open");
});

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("website__lang")) {
    langMenu.classList.remove("open");
  }
});

// ===== toggle between the about filter ======= //

let buttons = document.querySelectorAll("#about .filter > ul li");
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
let skillsSection = document.querySelector(".skills");
let progress = document.querySelectorAll(".skills .number");
let circle = document.querySelectorAll(".skills .circle");
let start = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop - window.innerHeight / 1.5) {
    if(!start) {
      progress.forEach((prog) => {
        let counter = setInterval(() => {
          prog.textContent++;
          if (prog.textContent === prog.dataset.number) {
            clearInterval(counter);
          }
        }, 1500 / prog.dataset.number);
      });
      circle.forEach((cir) => {
        cir.style.strokeDashoffset = 314 - (cir.dataset.number / 100) * 314;
      });
    }
    start = true;
  }
});

// ========= Flip The project card ============= //
let card = document.querySelectorAll(".portfolio .all");
let flipBtn = document.querySelectorAll(".portfolio .flip");

flipBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    card.forEach((card) => {
      card.classList.remove("fliped");
    });
    document.querySelector(`.${[e.target.dataset.word]}`).classList.add("fliped");
  });
})

document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("flip")) {
    card.forEach((card) => {
      card.classList.remove("fliped");
    });
  }
});

// ======== Scroll The project img ============= //
let scrollBtn = document.querySelectorAll(".portfolio .sroll");
let scrolled = false;

scrollBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (scrolled) {
      e.currentTarget.parentElement.previousElementSibling.firstElementChild.style.marginTop = `0`;
      scrolled = false;
    } else {
      e.currentTarget.parentElement.previousElementSibling.firstElementChild.style.marginTop = `-${e.target.dataset.height - 187}px`;
      scrolled = true;
    }
  });
})

// ===== toggle between the Portfolio filter ======= //
let filterButtons = document.querySelectorAll(".portfolio .filter ul li");
let projects = document.querySelectorAll(".portfolio .project .all");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    projects.forEach((project) => {
      project.style.cssText = `display: none`;
      document.querySelectorAll(`.portfolio .${e.target.dataset.text}`).forEach((el) => {
        el.style.cssText = `display: block`;
      });
    });
  })
})

// ======= Set Copyright year in the footer ======== //
let year = document.querySelector("footer .year");
year.textContent = new Date().getFullYear();





// ============ init emailjs ================ //

const btn = document.getElementById("subBtn");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_rfg3boh";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert(`${name.value} Your message has been sent succsessfuly, I will reply as soon as I see your message, Thank You for contacting me!`);
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});
//# sourceMappingURL=main.js.map