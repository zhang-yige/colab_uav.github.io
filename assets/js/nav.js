document.addEventListener('DOMContentLoaded', function () {
  const sideNav = document.getElementById('side-nav');
  const navToggle = document.getElementById('nav-toggle');
  const overlay = document.getElementById("nav-overlay");
  const navLinks = document.querySelectorAll(".nav-link");
  const submenuToggles = document.querySelectorAll(".submenu-toggle");
  const submenus = document.querySelectorAll(".has-children");

  function isMobile() {
    return window.innerWidth <= 768;
  }

  // 控制导航栏展开与关闭
  function openMobileNav() {
    sideNav.classList.add("open");
    overlay.classList.add("visible");
  }

  function closeMobileNav() {
    sideNav.classList.remove("open");
    overlay.classList.remove("visible");
  }

  // 导航开关按钮
  function toggleDesktopCollapse() {
    sideNav.classList.toggle('collapsed');
    document.body.classList.toggle("nav-collapsed");
  }
  // ☰ 按钮点击
  navToggle.addEventListener("click", () => {
    if (isMobile()) {
      sideNav.classList.contains("open") ? closeMobileNav() : openMobileNav();
    } else {
      toggleDesktopCollapse();
    }
  });

  // 点击链接后（仅移动端）关闭导航栏
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (isMobile()) {
        closeMobileNav();
      }
    });
  });

  // 点击遮罩层关闭导航（仅移动端）
  overlay.addEventListener("click", () => {
    if (isMobile()) {
      closeMobileNav();
    }
  });

  // 子菜单 toggle 按钮行为（桌面可点击，手机不响应）
  submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", (e) => {
      if (!isMobile()) {
        const parent = toggle.closest(".has-children");
        parent.classList.toggle("open");
      }
    });
  });

  // 初始化：在手机上自动展开所有子菜单
  function autoExpandSubmenusOnMobile() {
    if (isMobile()) {
      submenus.forEach(item => {
        item.classList.add("open");
      });
    } else {
      submenus.forEach(item => {
        item.classList.remove("open");
      });
    }
  }

  autoExpandSubmenusOnMobile();

  // 窗口尺寸变化时自动处理子菜单状态
  window.addEventListener("resize", () => {
    autoExpandSubmenusOnMobile();
  });

});
