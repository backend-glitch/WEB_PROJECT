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
