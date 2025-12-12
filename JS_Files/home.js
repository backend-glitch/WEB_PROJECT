// SECTION FILES
const sectionFiles = {
    home2: "sections/home2.html",
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

