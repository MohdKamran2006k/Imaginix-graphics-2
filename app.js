let hamburger = document.getElementById("hamburger");
let closebtn = document.getElementById("closebtn");
let navmobile = document.getElementById("nav-mobile");

function CloseandOpen(e) {
  e.classList.toggle("hidden");
}

hamburger.addEventListener("click", () => {
  CloseandOpen(hamburger);
  CloseandOpen(navmobile);
});

closebtn.addEventListener("click", () => {
  CloseandOpen(hamburger);
  CloseandOpen(navmobile);
});
