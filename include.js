// Include HTML components
async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  
  for (const element of elements) {
    const file = element.getAttribute('data-include');
    
    try {
      const response = await fetch(file);
      if (response.ok) {
        const html = await response.text();
        element.innerHTML = html;
        console.log(`✅ Loaded: ${file}`);
        
        // Re-initialize scripts for the included content
        if (file.includes('header')) {
          // Header-specific initialization
          initHeader();
        }
        if (file.includes('footer')) {
          // Footer-specific initialization
          initFooter();
        }
      } else {
        element.innerHTML = `<div style="color:red; padding:10px; border:1px solid red;">
          Error loading ${file}: ${response.status}
        </div>`;
      }
    } catch (error) {
      element.innerHTML = `<div style="color:red; padding:10px; border:1px solid red;">
        Failed to load ${file}: ${error.message}
      </div>`;
    }
  }
}

// Header initialization function
function initHeader() {
  console.log('Initializing header...');
  
  // Mobile menu functionality (same as in your header.js)
  const mobileMenuBtn = document.getElementById('mobileBtn');
  const closeSidebarBtn = document.getElementById('closeSidebarBtn');
  const mobileSidebar = document.getElementById('mobileSidebar');
  const menuOverlay = document.getElementById('menuOverlay');
  const mobileProductsToggle = document.getElementById('mobileProductsToggle');
  const mobileProductsMenu = document.getElementById('mobileProductsMenu');
  const productsArrow = document.getElementById('productsArrow');
  
  // ... rest of your header.js code ...
}

// Footer initialization function
function initFooter() {
  console.log('Initializing footer...');
  
  // Footer-specific initialization if needed
}

// Load includes when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', includeHTML);
} else {
  includeHTML();
}