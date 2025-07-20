document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("site-header");

  // 监听滚动事件
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // 平滑滚动跳转（如果HTML中是锚点）
  document.querySelectorAll(".navbar a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
