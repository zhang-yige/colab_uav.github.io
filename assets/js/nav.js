// nav.js
document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("nav-toggle");
  const overlay = document.getElementById("overlay");
  const body = document.body;
  const navLinks = document.querySelectorAll("#side-nav .nav-link");

  function isMobile() {
    return window.innerWidth <= 768;
  }

  function closeNav() {
    body.classList.remove("nav-open");
  }

  function toggleNav() {
    if (isMobile()) {
      body.classList.toggle("nav-open");
    } else {
      body.classList.toggle("nav-collapsed");
    }
  }

  toggleBtn.addEventListener("click", toggleNav);
  overlay.addEventListener("click", closeNav);

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (isMobile()) {
        closeNav();
      }
    });
  });

  // Optional: Reset on resize
  window.addEventListener("resize", () => {
    if (!isMobile()) {
      body.classList.remove("nav-open");
    }
  });
});
