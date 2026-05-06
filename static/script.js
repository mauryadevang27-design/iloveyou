//^ for leptop

// function moveRandomEl(elm) {
//   elm.style.position = "absolute";
//   elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
//   elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
// }

// const moveRandom = document.querySelector("#move-random");

// moveRandom.addEventListener("mouseenter", function (e) {
//   moveRandomEl(e.target);
// });

//* for mobile

// function moveRandomEl(elm) {
//   elm.style.position = "absolute";

//   const x = Math.floor(Math.random() * 80);
//   const y = Math.floor(Math.random() * 80);

//   elm.style.left = x + "%";
//   elm.style.top = y + "%";
// }

// const moveRandom = document.querySelector("#move-random");

// // Desktop (mouse)
// moveRandom.addEventListener("mouseenter", function (e) {
//   moveRandomEl(e.target);
// });

// // Mobile (touch)
// moveRandom.addEventListener("touchstart", function (e) {
//   e.preventDefault(); // click hone se rokta hai
//   moveRandomEl(e.target);
// });

// // Backup (agar click ho hi jaye)
// moveRandom.addEventListener("click", function (e) {
//   e.preventDefault();
//   moveRandomEl(e.target);
// });

const moveRandom = document.querySelector("#move-random");

// page load ke baad hi active hoga
let canMove = false;

// thoda delay taki page stable ho jaye
setTimeout(() => {
  canMove = true;
}, 700);

function moveRandomEl(elm) {
  if (!canMove) return; // load ke time move nahi karega

  elm.style.position = "absolute";

  const x = Math.floor(Math.random() * 80);
  const y = Math.floor(Math.random() * 80);

  elm.style.left = x + "%";
  elm.style.top = y + "%";
}

// Desktop (mouse hover)
moveRandom.addEventListener("mouseenter", (e) => {
  moveRandomEl(e.target);
});

// Mobile (touch)
moveRandom.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveRandomEl(e.target);
});

// Backup (click)
moveRandom.addEventListener("click", (e) => {
  e.preventDefault();
  moveRandomEl(e.target);
});


