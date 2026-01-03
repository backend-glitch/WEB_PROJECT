//motion
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.15
  }
);

reveals.forEach(el => observer.observe(el));





// parallex
const layers = document.querySelectorAll(".parallax-layer");

window.addEventListener("mousemove", e => {
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;

  layers.forEach((layer, i) => {
    layer.style.transform = `translate(${x * (i + 10)}px, ${y * (i + 10)}px)`;
  });
});




//navbar
let scrollTimeout;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  nav.classList.add("scrolled");

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    nav.classList.remove("scrolled");
  }, 500);
});
