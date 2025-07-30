document.addEventListener('DOMContentLoaded', function () {
  const sideNav = document.getElementById('side-nav');
  const navToggle = document.getElementById('nav-toggle');
  const submenuToggle = sideNav.querySelector('.submenu-toggle');

  // 宽屏默认展开，窄屏默认收起
  function checkScreen() {
    if (window.innerWidth <= 768) {
      sideNav.classList.add('collapsed');
    } else {
      sideNav.classList.remove('collapsed');
    }
  }
  checkScreen();

  window.addEventListener('resize', checkScreen);

  // 导航开关按钮
  navToggle.addEventListener('click', function () {
    sideNav.classList.toggle('collapsed');
    document.body.classList.toggle('nav-collapsed');
  });

  // 子菜单展开/收起
  submenuToggle.addEventListener('click', function () {
    sideNav.querySelector('.has-children').classList.toggle('open');
  });

  // 二级导航跳转 & 轮播 slide 控制
  const projectLinks = sideNav.querySelectorAll('.project-link');
  projectLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const slideId = this.dataset.slideId;
      const targetId = this.getAttribute('href').substring(1);
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: 'smooth' });
      }
      // 调用你的轮播跳转函数
      if (typeof goToSlideById === 'function') {
        goToSlideById(slideId);
      }
      // 窄屏点击后收起导航栏
      if (window.innerWidth <= 768) {
        sideNav.classList.remove('expanded');
      }
    });
  });
});
