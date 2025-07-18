// 轮播图功能
document.addEventListener('DOMContentLoaded', function() {
  // 初始化轮播
  const carouselItems = document.querySelectorAll('.carousel-item');
  if (carouselItems.length > 0) {
    let currentIndex = 0;
    carouselItems[currentIndex].classList.add('active');
    
    // 自动轮播
    setInterval(() => {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % carouselItems.length;
      carouselItems[currentIndex].classList.add('active');
    }, 3000);
  }
  
  // 视频点击播放优化
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
    video.addEventListener('click', function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});