// emoji effect

function showEmoji(e) {
  // Get button position on screen
  const btn = e.target;
  const rect = btn.getBoundingClientRect();

  // Create emoji
  const emoji = document.createElement("span");
  emoji.classList.add("emoji");
  emoji.innerText = "😃";

  // Position emoji at the center of button
  emoji.style.position = "fixed";
  emoji.style.left = rect.left + rect.width / 2 + "px";
  emoji.style.top = rect.top + "px";

  // Add emoji to the body (not inside button)
  document.body.appendChild(emoji);

  // Remove after animation
  setTimeout(function() {
    emoji.remove();
  }, 1000);
}