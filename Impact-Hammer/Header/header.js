// header.js - Header Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Header initialized');
    
    // Mobile Sidebar Functionality
    const mobileMenuBtn = document.getElementById('mobileBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const menuOverlay = document.getElementById('menuOverlay');
    const mobileProductsToggle = document.getElementById('mobileProductsToggle');
    const mobileProductsMenu = document.getElementById('mobileProductsMenu');
    const productsArrow = document.getElementById('productsArrow');

    // Open sidebar
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileSidebar.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close sidebar
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // Close sidebar when clicking overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // Toggle products submenu
    if (mobileProductsToggle && mobileProductsMenu && productsArrow) {
        mobileProductsToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            mobileProductsMenu.classList.toggle('active');
            productsArrow.style.transform = mobileProductsMenu.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
        });
    }

    // Close mobile menu function
    function closeMobileMenu() {
        if (mobileSidebar) mobileSidebar.classList.remove('active');
        if (menuOverlay) menuOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
        
        // Close products submenu
        if (mobileProductsMenu && productsArrow) {
            mobileProductsMenu.classList.remove('active');
            productsArrow.style.transform = 'rotate(0deg)';
        }
    }

    // Close sidebar on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileSidebar && mobileSidebar.classList.contains('active')) {
            closeMobileMenu();
        }
    });

    // Fix header padding on the body
    const header = document.querySelector('header');
    if (header) {
        const headerHeight = header.offsetHeight;
        document.body.style.paddingTop = headerHeight + 'px';
        
        // Recalculate on resize
        window.addEventListener('resize', function() {
            document.body.style.paddingTop = header.offsetHeight + 'px';
        });
    }

    // Close mobile sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileSidebar && mobileSidebar.classList.contains('active')) {
            if (!mobileSidebar.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                closeMobileMenu();
            }
        }
    });
});