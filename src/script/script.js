document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-laptop");

  // Check if elements exist before adding event listeners
  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      if (window.innerWidth < 1024) {
        navMenu.classList.toggle("active");
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        navMenu.classList.remove("active");
      }
    });
  }
});


const navSpans = document.querySelectorAll('.nav-laptop li span');

navSpans.forEach(span => {
  span.addEventListener('click', () => {
    navSpans.forEach(s => s.classList.remove('active'));
    span.classList.add('active');
  });
});


