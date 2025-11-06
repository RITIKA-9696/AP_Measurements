// ============================================
// MOBILE SIDEBAR FUNCTIONALITY - OVERLAY
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const menuOverlay = document.getElementById('menuOverlay');
  const mobileProductsToggle = document.getElementById('mobileProductsToggle');
  const mobileProductsMenu = document.getElementById('mobileProductsMenu');
  const productsArrow = document.getElementById('productsArrow');

  // Check if elements exist before using them
  if (!mobileSidebar || !menuOverlay) {
    console.error('❌ Required mobile menu elements not found');
    return;
  }

  // Function to open sidebar
  function openSidebar() {
    mobileSidebar.classList.add('active');
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    console.log('📱 Sidebar opened');
  }

  // Function to close sidebar
  function closeSidebar() {
    mobileSidebar.classList.remove('active');
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    
    // Close products submenu if it exists
    if (mobileProductsMenu && productsArrow) {
      mobileProductsMenu.classList.remove('active');
      productsArrow.style.transform = 'rotate(0deg)';
    }
    
    console.log('📱 Sidebar closed');
  }

  // Open sidebar
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      openSidebar();
    });
  }

  // Close sidebar with X button
  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeSidebar();
    });
  }

  // Close sidebar when clicking overlay
  if (menuOverlay) {
    menuOverlay.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      closeSidebar();
    });
  }

  // Prevent closing when clicking inside sidebar
  if (mobileSidebar) {
    mobileSidebar.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  // Toggle products submenu
  if (mobileProductsToggle && mobileProductsMenu && productsArrow) {
    mobileProductsToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      mobileProductsMenu.classList.toggle('active');
      productsArrow.style.transform = mobileProductsMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
      console.log('📂 Products menu toggled');
    });
  }

  // Close sidebar when clicking nav links (except toggle)
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link:not(#mobileProductsToggle), .mobile-submenu-link, .mobile-nav-cta');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.stopPropagation();
      closeSidebar();
    });
  });

  // Close sidebar on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileSidebar.classList.contains('active')) {
      closeSidebar();
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 1024 && mobileSidebar.classList.contains('active')) {
      closeSidebar();
    }
  });

  console.log('📱 Mobile sidebar initialized');
});

// ============================================
// CAROUSEL FUNCTIONALITY
// ============================================

let currentSlide = 0;
const totalSlides = 3;
const autoplaySpeed = 5000;
let autoplayInterval;

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 DOM Ready - Initializing carousel & menu');
  initCarousel();
  startAutoplay();
  initMegaMenu();
});

/**
 * Initialize carousel
 */
function initCarousel() {
  updateCarouselPosition();
  updateDots();
  console.log('✅ Carousel initialized');
}

/**
 * Update carousel position
 */
function updateCarouselPosition() {
  const carousel = document.getElementById('carousel');
  if (!carousel) {
    console.error('❌ Carousel element not found!');
    return;
  }
  const offset = currentSlide * -100;
  carousel.style.transform = `translateX(${offset}%)`;
}

/**
 * Update dot indicators
 */
function updateDots() {
  const dots = document.querySelectorAll('.carousel-dot');
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

/**
 * Next slide
 */
function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarouselPosition();
  updateDots();
}

/**
 * Previous slide
 */
function prevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCarouselPosition();
  updateDots();
}

/**
 * Go to specific slide
 */
function goToSlide(n) {
  currentSlide = n;
  updateCarouselPosition();
  updateDots();
  resetAutoplay();
  console.log(`🎯 Jumped to slide ${n}`);
}

/**
 * Start autoplay
 */
function startAutoplay() {
  autoplayInterval = setInterval(function() {
    nextSlide();
  }, autoplaySpeed);
  console.log('▶️ Autoplay started');
}

/**
 * Reset autoplay
 */
function resetAutoplay() {
  clearInterval(autoplayInterval);
  startAutoplay();
}

// ============================================
// MEGA MENU FUNCTIONALITY - ENHANCED FOR MOBILE
// ============================================

function initMegaMenu() {
  const megaMenuItems = document.querySelectorAll('.mega-menu-item');
  const isMobile = window.innerWidth < 1024;

  // Check if mega menu items exist
  if (megaMenuItems.length === 0) {
    console.log('ℹ️ No mega menu items found');
    return;
  }

  megaMenuItems.forEach(item => {
    const trigger = item.querySelector('a'); // Use the anchor tag as trigger
    const menu = item.querySelector('.mega-menu');

    if (trigger && menu) {
      if (isMobile) {
        // Mobile: Click to toggle
        trigger.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          
          // Close other menus
          document.querySelectorAll('.mega-menu').forEach(m => {
            if (m !== menu) {
              closeMegaMenu(m);
            }
          });

          // Toggle current menu
          const isOpen = menu.style.visibility === 'visible';
          if (isOpen) {
            closeMegaMenu(menu);
          } else {
            openMegaMenu(menu);
          }
          
          console.log('📱 Mobile menu toggled');
        });
      } else {
        // Desktop: Hover to open
        item.addEventListener('mouseenter', function() {
          openMegaMenu(menu);
        });

        item.addEventListener('mouseleave', function() {
          closeMegaMenu(menu);
        });
      }
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.mega-menu-item') && !e.target.closest('.mega-menu')) {
      document.querySelectorAll('.mega-menu').forEach(menu => {
        closeMegaMenu(menu);
      });
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      const menus = document.querySelectorAll('.mega-menu');
      menus.forEach(menu => closeMegaMenu(menu));
    }
  });

  // Handle window resize
  window.addEventListener('resize', function() {
    const newIsMobile = window.innerWidth < 1024;
    if (newIsMobile !== isMobile) {
      location.reload(); // Reload to reinitialize
    }
  });
}

/**
 * Open mega menu with animation
 */
function openMegaMenu(menu) {
  if (!menu) return;
  menu.style.opacity = '1';
  menu.style.visibility = 'visible';
  menu.style.transform = 'translateX(-50%) translateY(0)';
  console.log('📂 Mega menu opened');
}

/**
 * Close mega menu
 */
function closeMegaMenu(menu) {
  if (!menu) return;
  menu.style.opacity = '0';
  menu.style.visibility = 'hidden';
  menu.style.transform = 'translateX(-50%) translateY(-20px)';
}

// ============================================
// SMOOTH SCROLL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      
      if (target && href !== '#') {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================

function observeElements() {
  if (!('IntersectionObserver' in window)) {
    console.warn('⚠️ IntersectionObserver not supported');
    return;
  }

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.product-card, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', observeElements);

// ============================================
// ARROW ANIMATION ON PRODUCTS HOVER
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  const productsTrigger = document.querySelector('.mega-menu-item a');
  
  if (productsTrigger) {
    const arrow = productsTrigger.querySelector('svg');
    
    if (arrow) {
      productsTrigger.addEventListener('mouseenter', function() {
        arrow.style.transform = 'rotate(180deg)';
      });
      
      const megaMenu = productsTrigger.closest('.mega-menu-item').querySelector('.mega-menu');
      if (megaMenu) {
        megaMenu.addEventListener('mouseleave', function() {
          arrow.style.transform = 'rotate(0deg)';
        });
      }
    }
  }
});

console.log('✨ Script loaded successfully - All features active');