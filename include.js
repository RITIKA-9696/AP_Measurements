
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

        // After injecting header, re-initialize its JavaScript
        if (file.includes('header')) {
          initHeader();
        }
        if (file.includes('footer')) {
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

// Correct Header initialization - matches your current HTML IDs exactly
function initHeader() {
  console.log('Initializing header...');

  const mobileBtn = document.getElementById('mobileBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const productsToggle = document.getElementById('productsToggle');
  const productsDropdown = document.getElementById('productsDropdown');
  const productsArrow = document.getElementById('productsArrow');

  if (!mobileBtn || !closeBtn || !mobileMenu) {
    console.error('Header elements not found - make sure header is loaded');
    return;
  }

  // Prevent body scroll when menu open
  function lockScroll() {
    document.body.style.overflow = 'hidden';
  }
  function unlockScroll() {
    document.body.style.overflow = '';
  }

  // Open menu
  mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
    lockScroll();
  });

  // Close menu
  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('translate-x-0');
    mobileMenu.classList.add('translate-x-full');
    unlockScroll();
  });

  // Close when clicking overlay
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      unlockScroll();
    }
  });

  // Products dropdown in mobile menu
  if (productsToggle && productsDropdown && productsArrow) {
    productsToggle.addEventListener('click', () => {
      productsDropdown.classList.toggle('hidden');
      productsArrow.classList.toggle('rotate-180');
    });
  }
}

function initFooter() {
  console.log('Initializing footer...');
  // Add footer-specific JS here if needed
}

// Run when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', includeHTML);
} else {
  includeHTML();
}
