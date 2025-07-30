document.addEventListener("DOMContentLoaded", function () {
  // 获取所有具有 data-slide-id 属性的 project-card 链接
  const projectLinks = document.querySelectorAll('.project-card[data-slide-id]');

  projectLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      const slideId = link.getAttribute('data-slide-id');
      if (window.goToSlideById) {
        window.goToSlideById(slideId); // 调用全局函数跳转到对应 slide
      } else {
        console.error("goToSlideById 函数未定义！");
      }
    });
  });
});
