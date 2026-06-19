document.addEventListener('DOMContentLoaded', () => {
    
    // --- TAB NAVIGATION LOGIC ---
    const navLinks = document.querySelectorAll('.nav-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navList = document.querySelector('.nav-links');

    // Function to switch tabs
    window.switchTab = function(tabId) {
        // Remove active class from all links and contents
        navLinks.forEach(link => link.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked link
        const activeLink = document.querySelector(`.nav-link[data-tab="${tabId}"]`);
        if (activeLink) activeLink.classList.add('active');

        // Show corresponding content
        const activeContent = document.getElementById(tabId);
        if (activeContent) activeContent.classList.add('active');

        // Close mobile menu if open
        navList.classList.remove('active');
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Event listeners for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = link.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Mobile Menu Toggle
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // --- WHATSAPP FORM LOGIC ---
    const whatsappForm = document.getElementById('whatsappForm');
    
    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get values
            const name = document.getElementById('senderName').value.trim();
            const company = document.getElementById('company').value.trim();
            const purpose = document.getElementById('messagePurpose').value.trim();

            // Simple validation
            if (!name || !company || !purpose) {
                alert('Mohon lengkapi semua bidang formulir.');
                return;
            }

            // Sanitize inputs (basic removal of newlines for URL safety)
            const safeName = name.replace(/[\n\r]/g, ' ');
            const safeCompany = company.replace(/[\n\r]/g, ' ');
            const safePurpose = purpose.replace(/[\n\r]/g, ' ');

            // Construct Message
            const message = `Halo M. Ariel Ady Rangga,%0A%0ASaya *${safeName}* dari *${safeCompany}*.%0A%0A${safePurpose}%0A%0A– Terima kasih.`;

            // Target Number
            const phoneNumber = '6285649351378';

            // Open WhatsApp
            const waURL = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(waURL, '_blank');
            
            // Reset form
            whatsappForm.reset();
        });
    }

});
