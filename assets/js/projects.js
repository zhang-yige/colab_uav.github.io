document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("project-carousel");
  const items = carousel.querySelectorAll(".carousel-item");
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("carousel-dots");

  let currentIndex = 0;

  function moveSlide(index) {
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");

        // 暂停上一项中的视频，防止多视频同时播放
        const video = item.querySelector("video");
        if (video && !video.paused) {
          video.pause();
          video.currentTime = 0;
        }
      }
    });

    // 更新圆点状态
    const dots = dotsContainer.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });

    currentIndex = index;
  }

  // 初始化圆点
  items.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => moveSlide(index));
    dotsContainer.appendChild(dot);
  });

  carousel.appendChild(dotsContainer);

  window.moveSlide = function(direction) {
    const total = items.length;
    const newIndex = (currentIndex + direction + total) % total;
    moveSlide(newIndex);
  };

  // 初始化第一张
  moveSlide(0);
});

function goToSlideById(slideId) {
  const items = document.querySelectorAll('.carousel-item');
  let targetIndex = -1;
  
  items.forEach((item, index) => {
    if (item.id === slideId) {
      targetIndex = index;
    }
  });
  
  if (targetIndex !== -1) {
    moveSlide(targetIndex);
  }
}

// 暴露这个函数给全局
window.goToSlideById = goToSlideById;
