document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const banner = document.querySelector('.banner-image');
    
    if (navbar && banner) {
      const bannerHeight = banner.offsetHeight;
      
      window.addEventListener('scroll', function() {
        if (window.pageYOffset > bannerHeight) {
          navbar.classList.add('sticky');
        } else {
          navbar.classList.remove('sticky');
        }
      });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      });
    });
  });