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


// no parallex for mobile
if (window.innerWidth < 768) {
  document.querySelectorAll(".parallax-layer").forEach(el => {
    el.classList.remove("parallax-layer");
  });
}




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



//gyro

const layer = document.querySelector(".layer");

window.addEventListener("deviceorientation", e => {

  const x = e.gamma * 0.3; 
  const y = e.beta * 0.3;  

  layer.style.transform = `translate(${x}px, ${y}px)`;
});

