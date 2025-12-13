// include.js
// Function to load HTML content into an element
async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  
  for (const element of elements) {
    const file = element.getAttribute('data-include');
    try {
      const response = await fetch(file);
      if (response.ok) {
        const html = await response.text();
        element.innerHTML = html;
        
        // Reinitialize scripts if needed
        if (file.includes('header.html')) {
          initHeaderScripts();
        }
      } else {
        element.innerHTML = `<p style="color:red">Error loading ${file}: ${response.status}</p>`;
      }
    } catch (error) {
      element.innerHTML = `<p style="color:red">Error loading ${file}: ${error.message}</p>`;
    }
  }
}

// Initialize header-specific scripts
function initHeaderScripts() {
  // Mobile sidebar functionality
  const mobileMenuBtn = document.getElementById('mobileBtn');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const menuOverlay = document.getElementById('menuOverlay');
  const mobileProductsToggle = document.getElementById('mobileProductsToggle');
  const mobileProductsMenu = document.getElementById('mobileProductsMenu');
  const productsArrow = document.getElementById('productsArrow');

  if (mobileMenuBtn && mobileSidebar && menuOverlay) {
    // Open sidebar
    mobileMenuBtn.addEventListener('click', function(e) {
      e.preventDefault();
      mobileSidebar.classList.add('active');
      menuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    // Close sidebar
    closeSidebarBtn.addEventListener('click', function(e) {
      e.preventDefault();
      mobileSidebar.classList.remove('active');
      menuOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });

    // Toggle products submenu
    if (mobileProductsToggle && mobileProductsMenu && productsArrow) {
      mobileProductsToggle.addEventListener('click', function(e) {
        e.preventDefault();
        mobileProductsMenu.classList.toggle('active');
        productsArrow.style.transform = mobileProductsMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
      });
    }
  }
}

// Load includes when DOM is ready
document.addEventListener('DOMContentLoaded', includeHTML);