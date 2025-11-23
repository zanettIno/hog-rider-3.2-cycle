// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    
    // Handle navigation clicks
    const navLinks = document.querySelectorAll('.nav-item a');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked item
            this.parentElement.classList.add('active');
            
            // Hide all content sections
            contentSections.forEach(section => {
                section.classList.remove('active');
            });
            
            // Show the target section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.add('active');
                
                // Scroll to top of content area
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Copy color code to clipboard on click
    const colorCards = document.querySelectorAll('.color-card');
    
    colorCards.forEach(card => {
        card.addEventListener('click', function() {
            const colorCode = this.querySelector('.color-code').textContent;
            
            // Copy to clipboard
            navigator.clipboard.writeText(colorCode).then(() => {
                // Show feedback
                showCopyFeedback(this, colorCode);
            }).catch(err => {
                console.error('Failed to copy:', err);
            });
        });
    });
    
    // Show copy feedback
    function showCopyFeedback(element, colorCode) {
        const feedback = document.createElement('div');
        feedback.className = 'copy-feedback';
        feedback.textContent = `Copiado: ${colorCode}`;
        feedback.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #2c2c2c;
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            font-size: 14px;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateY(100px);
                opacity: 0;
            }
            to {
                transform: translateY(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateY(0);
                opacity: 1;
            }
            to {
                transform: translateY(100px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Highlight active section on scroll
    // (Removed - not needed with tab-based navigation)
    
    console.log('Design System Framework initialized successfully!');
});

// Export color palette data
const colorPalette = {
    primary: {
        main: '#ce7b90',
        light: '#f9c4c4',
        dark: '#850e35'
    },
    secondary: {
        main: '#213161',
        light: '#545f71',
        dark: '#161f3e'
    },
    tertiary: {
        main: '#759aab',
        dark: '#618191',
        light: '#adbcc7'
    }
};

// Make it globally accessible
window.designSystem = {
    colors: colorPalette
};