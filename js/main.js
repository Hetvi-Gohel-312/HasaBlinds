// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        // Change button text based on menu state
        mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
      });
    }
    
    // Close mobile menu when clicking a link
    const navLinksItems = document.querySelectorAll('.nav-link a');
    navLinksItems.forEach(link => {
      link.addEventListener('click', function() {
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
          mobileMenuBtn.textContent = '☰';
        }
      });
    });
    
    // Navbar scroll effect
    function handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.background = "rgba(255, 255, 255, 0.9)";
      } else {
        navbar.classList.remove('scrolled');
        navbar.style.background = "rgba(255, 255, 255, 0.7)";
      }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to apply correct state
    handleScroll();
    
    // Animations for elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in');
    
    // Function to check if element is in viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    }
    
    // Function to handle scroll animations
    function handleScrollAnimations() {
      fadeElements.forEach(element => {
        if (isElementInViewport(element) && !element.classList.contains('animated')) {
          element.classList.add('animated');
          element.style.animationPlayState = 'running';
        }
      });
    }
    
    // Add scroll event for animations
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('resize', handleScrollAnimations);
    
    // Initial check for animations
    handleScrollAnimations();
  });
  