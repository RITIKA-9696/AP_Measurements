// footer.js - Footer Specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Footer initialized');
    
    // Smooth scroll for anchor links in footer
    const footerLinks = document.querySelectorAll('.footer-link, .footer-bottom-link');
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only prevent default if it's an anchor link to same page
            if (this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Current year for copyright
    const copyrightElement = document.querySelector('.footer-copyright');
    if (copyrightElement) {
        const currentYear = new Date().getFullYear();
        copyrightElement.innerHTML = copyrightElement.innerHTML.replace('2025', currentYear);
    }

    // Add loading state for links
    footerLinks.forEach(link => {
        link.addEventListener('click', function() {
            // You can add loading indicators here if needed
            console.log(`Navigating to: ${this.getAttribute('href')}`);
        });
    });

    // Handle contact form link if present
    const contactFormLink = document.querySelector('a[href*="contact"]');
    if (contactFormLink && contactFormLink.textContent.includes('Contact Form')) {
        contactFormLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Here you can trigger a modal or redirect to contact page
            window.location.href = 'contact.html';
        });
    }
});