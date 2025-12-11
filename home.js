// SECTION FILES
const sectionFiles = {
    hero: "sections/hero.html",
    skills: "sections/skills.html",
    projects: "sections/projects.html",
    contact: "sections/contact.html"
};

// Load all sections dynamically
async function loadSections() {
    const container = document.getElementById("content");

    for (let id in sectionFiles) {
        const div = document.createElement("div");
        div.classList.add("section");
        div.id = id;

        const html = await fetch(sectionFiles[id]).then(res => res.text());
        div.innerHTML = html;

        container.appendChild(div);
    }

    startTyping(); // init typing
}
loadSections();

/* ----------------------
   Typing Animation
----------------------- */
let textIndex = 0;
let charIndex = 0;
let typingTexts = ["Web Developer", "Frontend Enthusiast", "UI Designer","Exploring Backend"];
let speed = 100;

function startTyping() {
    const typingElement = document.querySelector(".typing");
    if (!typingElement) return;

    let currentText = typingTexts[textIndex];
    typingElement.innerHTML = currentText.substring(0, charIndex);

    charIndex++;

    if (charIndex > currentText.length) {
        charIndex = 0;
        textIndex = (textIndex + 1) % typingTexts.length;
        setTimeout(startTyping, 800);
    } else {
        setTimeout(startTyping, speed);
    }
}

/* ----------------------
   Dark / Light Toggle
----------------------- */
const toggler = document.getElementById("themeToggle");
const body = document.body;

toggler.onclick = () => {
    // Toggle dark class
    body.classList.toggle("dark");

    // Update button text based on current theme
    if (body.classList.contains("dark")) {
        toggler.textContent = "Light"; // Show "Light" when dark theme is active
    } else {
        toggler.textContent = "Dark";  // Show "Dark" when light theme is active
    }
};






// floating-object
function createFloatingShapes() {
 
    const bg = document.getElementById("bg-shapes");

const gradients = [
  "linear-gradient(135deg, #ff4d79, #ffb84d)",
  "linear-gradient(135deg, #6a5af9, #b45eff)",
  "linear-gradient(135deg, #4dd0e1, #0097a7)",
  "linear-gradient(135deg, #4dff91, #24c96b)",
  "linear-gradient(135deg, #ff6ec4, #7873f5)"
];

let positions = [
  { top: "10%", delay: "0s", duration: "18s" },
  { top: "40%", delay: "3s", duration: "20s" },
  { top: "70%", delay: "1s", duration: "22s" },
  { top: "85%", delay: "5s", duration: "17s" }
];

positions.forEach(pos => {
  let s = document.createElement("div");
  s.classList.add("shape");

 
  s.style.background = gradients[Math.floor(Math.random() * gradients.length)];

  s.style.top = pos.top;
  s.style.animationDelay = pos.delay;
  s.style.animationDuration = pos.duration;

  bg.appendChild(s);
});


}

createFloatingShapes();
