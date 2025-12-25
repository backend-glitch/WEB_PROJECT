// floating-object
function createFloatingShapes() {
 
    const bg = document.getElementById("bg-shapes");

const gradients = [
  "linear-gradient(135deg, #ff4d79, #ffb84d)",
  "linear-gradient(135deg, #6a5af9, #b45eff)",
  "linear-gradient(135deg, #4dd0e1, #0097a7)",
  "linear-gradient(135deg, #4dff91, #24c96b)",
  "linear-gradient(135deg, #ff6ec4, #7873f5)",
   "linear-gradient(135deg, #6a5af9, #b45eff)",
   "linear-gradient(135deg, #ff6ec4, #7873f5)"
];

let positions = [
  { top: "10%", delay: "0s", duration: "18s" },
  { top: "40%", delay: "3s", duration: "20s" },
  { top: "70%", delay: "1s", duration: "22s" },
  { top: "85%", delay: "5s", duration: "17s" },
   { top: "95%", delay: "2s", duration: "18s" },
    { top: "15%", delay: "8s", duration: "17s" },
     { top: "55%", delay: "12s", duration: "20s" }
   
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
