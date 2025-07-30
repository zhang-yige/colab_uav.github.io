document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("project-carousel");
  let currentIndex = 0;
  let intervalId = null;
  const intervalTime = 3000; // 3秒切换一次，可根据需要调整

  // 移动幻灯片函数
  function moveSlide(direction) {
    const items = carousel.querySelectorAll(".carousel-item");
    const total = items.length;

    currentIndex = (currentIndex + direction + total) % total;

    items.forEach((item, index) => {
      item.style.display = index === currentIndex ? "flex" : "none";
    });
  }

  // 启动自动轮播
  function startAutoSlide() {
    if (!intervalId) {
      intervalId = setInterval(() => {
        moveSlide(1); // 向右轮播
      }, intervalTime);
    }
  }

  // 停止自动轮播
  function stopAutoSlide() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  // 初始化
  moveSlide(0);
  startAutoSlide();

  // 鼠标悬停暂停
  carousel.addEventListener("mouseenter", stopAutoSlide);
  carousel.addEventListener("mouseleave", startAutoSlide);

  // 暴露moveSlide给外部使用（如果需要手动按钮控制）
  window.moveSlide = moveSlide;
});