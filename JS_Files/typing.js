
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
