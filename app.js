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


  const slider = document.getElementById("slider");
  const slides = slider.children;
  const dots = document.querySelectorAll(".dot");

  let index = 0;

  function showSlide(i) {
    index = i;
    slider.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, dIndex) => {
      dot.classList.toggle("bg-white", dIndex === index);
      dot.classList.toggle("bg-white/50", dIndex !== index);
    });
  }

  // Auto slide every 3 seconds
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);

  // Optional: Click dots to navigate
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });

  // Initial slide
  showSlide(0);
