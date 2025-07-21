// 初始显示第一个项目
document.addEventListener("DOMContentLoaded", () => {
  moveSlide(0);
});

let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.getElementById("project-carousel");
  const items = carousel.querySelectorAll(".carousel-item");
  const total = items.length;

  currentIndex = (currentIndex + direction + total) % total;

  items.forEach((item, index) => {
    item.style.display = index === currentIndex ? "flex" : "none";
  });
}

// 初始显示第一个项目
document.addEventListener("DOMContentLoaded", () => {
  moveSlide(0);

  // 添加自动轮播，5000 表示 5 秒切换一次
  setInterval(() => {
    moveSlide(1); // 向右轮播
  }, 1000); // 修改这里可以改变轮播速度（以毫秒为单位）
});

